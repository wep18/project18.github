import './App.css';
import {Col,Container,Row, Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {db} from "../config/firebase.config";
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import FollowImage from "../assets/notfollowed.png";
import UnfollowImage from "../assets/followed.png";

export default function WhoToFollow(){
	const [users, setUsers] = useState([])
	const [numberOfUsers, setNumberOfUsers] = useState(5);
	const usersRef = collection(db,'Users')


	function randomizeUsers(users) {
		let randomizedUsers = [];
		const copiedUsers = structuredClone(users);
		for (let i = 0; i < users.length; i++) {
			const randomIndex = Math.floor(Math.random() * copiedUsers.length);
			randomizedUsers.push(copiedUsers[randomIndex]);
			copiedUsers.splice(randomIndex, 1);
		}
		return randomizedUsers;
	}

	useEffect(function(){

		async function getUsers(){
			try {
				const data=await getDocs(usersRef)
				const filteredData = data.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setUsers(randomizeUsers(filteredData));
			}
			catch(e){
				console.log(e);
			}
		}

		getUsers();

	},[])



	async function followOrUnfollow(UserID,User){
		const UserRef=doc(db,"Users",UserID);
		const updatedUser={
			...User,
			Is_Followed: !User.Is_Followed
		}
		const filteredUpdatedUser = {
			Name: updatedUser.Name,
			Age: updatedUser.Age,
			Profession: updatedUser.Profession,
			Is_Followed: updatedUser.Is_Followed,
			Birthdate: updatedUser.Birthdate,
			pfp: updatedUser.pfp,
			story: updatedUser.story ?? false,
		};
		try {
			await setDoc(UserRef, filteredUpdatedUser);
			setUsers((users) =>
				users.map((user) => {
					if (user.id === UserID) {
						return updatedUser;
					}

					return user;
				}
				));
		} catch (error) {
			console.log(error);
		}
	}


	return(
		<Container className='col-3' style={{marginTop: "1em"}}>
			<ListGroup className='listing-group-follows'>
				<h2 className='followheader'>Who to follow</h2>
				{users.map((user,index) => {
					if (index >= numberOfUsers) {
						return null;
					}
					return (
						<ListGroupItem key={index} className='lgitem'>
							<Row xxl={3} xl={3} lg={3} md={3} sm={3} xs={1}>

								<Col className='profile-pics'>
									{
										user.story ?
											<img className='pfp-photo' src={user.pfp} style={{border: "3px solid #019ADE"}}/> :
											<img className='pfp-photo' src={user.pfp}/>
									}
								</Col> 

								<Col className='profile-name-and-profession'>
									<Card.Title className='ctitle'>{user.Name}</Card.Title>
									<Card.Subtitle lassName="professionUse text-muted">{user.Profession}</Card.Subtitle>
								</Col>

								<Col className='FoFCol'>
									<button className="FoF" onClick= {function() { followOrUnfollow(user.id, user)}}>
										{
											user.Is_Followed ? 
												(<img className='follo' src={UnfollowImage} alt="Unfollow"/>):
												(<img className='follo' src={FollowImage} alt="Follow"/>)
										}
										</button>
									</Col>

								</Row>
							</ListGroupItem>
					)})}

				<Button 
					variant='primary' 
					style={{ 
						backgroundColor: "#019ADE",
						borderColor: "#019ADE",
						width:"70%",
						display: "flex", 
						alignSelf: "center",
						justifyContent: "center",
						marginBottom: "0.1em",
					}}
					onClick={function() { setNumberOfUsers(numberOfUsers === users.length ? 5 : users.length) }}
					>
					{numberOfUsers === users.length ? "Hide" : "View More"}
				</Button>

			</ListGroup>
		</Container>
	);
}

