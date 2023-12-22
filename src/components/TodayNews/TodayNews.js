import './TodayNews.css';
import { Button, Card } from "react-bootstrap";
import {db} from "../../config/firebase.config";
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThreeDots } from 'react-bootstrap-icons';

const TodayNews = () => {
  const [news, setNews] = useState([]);
  const newsRef = collection(db, "news");
  const [numberOfNews,setNumberOfNews] = useState(4);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await getDocs(newsRef);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(filteredData);
      } catch (e) {
        console.log(e);
      }
    };
    
    getNews();
  }, []);

  return (
      <div className="news">
        <h2 className="tittle">Today's news</h2>
        {news.map((item, index) => {
          if(index>=numberOfNews) return null;
         return(
          <Card key={item.id}>
            <Card.Body>
              <Card.Title className='content'>{item.News}</Card.Title>
             <h6 className='card-text'>{item.time}</h6>
            </Card.Body>
          </Card>
        )})}
        <div className="emptiness">
          <ThreeDots className='point'/>

          <Button className="view" href="#"
					variant='primary'
					style={{ 

					}}

					onClick={function() { setNumberOfNews(numberOfNews === news.length ? 4 : news.length) }}
					>
					{numberOfNews === news.length ? "Hide" : "View all latest news"}
				</Button>

        </div>
      </div>


  );


};

export default TodayNews;
