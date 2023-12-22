import React from 'react';
import { Table, Button } from 'react-bootstrap';
import FollowImage from '../../assets/notfollowed.png';
import UnfollowImage from '../../assets/followed.png';
import { db } from '../../config/firebase.config';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

export default function WhoToFollow() {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(5);
  const usersRef = collection(db, 'Users');

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

  useEffect(function () {
    async function getUsers() {
      try {
        const data = await getDocs(usersRef);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(randomizeUsers(filteredData));
      } catch (e) {
        console.log(e);
      }
    }

    getUsers();
  }, []);

  async function followOrUnfollow(UserID, User) {
    const UserRef = doc(db, 'Users', UserID);
    const updatedUser = {
      ...User,
      Is_Followed: !User.Is_Followed,
    };
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
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (

      <Table hover style={{ width: '58%', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)', marginTop:'3em'}}>
				<thead>
					<tr>
						<th colSpan='4' style={{ textAlign: 'center' }}>
							<h2>Who to follow</h2>
						</th>
					</tr>
				</thead>
        <tbody>
          {users.map((user, index) => {
            if (index >= numberOfUsers) {
              return null;
            }
            return (
              <tr key={index}>
                <td style={{ width: '4.5em' }} colSpan='1'>
                  {user.story ? (
                    <img
                      className='pfp-photo'
                      src={user.pfp}
                      alt='Profile'
                      style={{ border: '3px solid #019ADE', width: "3.5em", height: "3.5em", borderRadius: "50%" }}
                    />
                  ) : (
                    <img className='pfp-photo' src={user.pfp} alt='Profile' style={{ width: "3.5em", height: "3.5em", borderRadius: "50%" }} />
                  )}
                </td>
                <td style={{ width: '10em', textAlign: 'left', verticalAlign: 'middle' }} colSpan='2'>
                  <div>
                    <strong>{user.Name}</strong>
                  </div>
                  <div className='text-muted'>{user.Profession}</div>
                </td>
                <td colSpan='1' style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                  <button className='FoF' onClick={() => followOrUnfollow(user.id, user)} style={{
										background: "transparent",
										border: "none",
									}}>
                    {user.Is_Followed ? (
                      <img className='follo' src={UnfollowImage} alt='Unfollow' style={{
												width: "2.5em",
												height: "2.5em",
												borderRadius: "50%",
												marginTop: "0.4em",
										 }} />
                    ) : (
                      <img className='follo' src={FollowImage} alt='Follow' style={{
												width: "2.5em",
												height: "2.5em",
												marginTop: "0.4em",
											}} />
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
				<tfoot>
					<tr>
						<td></td>
						<td colSpan='3'>
							<Button
								variant='primary'
								style={{
									backgroundColor: '#019ADE',
									borderColor: '#019ADE',
									width: '70%',
									display: 'flex',
									alignSelf: 'center',
									justifyContent: 'center',
									marginBottom: '0.1em',
								}}
								onClick={() => {
									setNumberOfUsers(numberOfUsers === users.length ? 5 : users.length);
								}}>
								{numberOfUsers === users.length ? 'Hide' : 'View More'}
							</Button>
						</td>
					</tr>
				</tfoot>
			</Table>
  );
}
