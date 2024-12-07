import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../styles/news.css"

function MainNews() {
  const [resultArea, setResultArea] = useState("");
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-news");
        const fetchedNews = Array.isArray(response.data) ? response.data : [];
        setListNews(fetchedNews);
      } catch (error) {
        console.log(error.message);
        setResultArea("Frontend: Request to display news failed");
      }
    }
    getData();
  }, [])
  
  return (
    <div className='mainNews'>
      {listNews.map((record, index) =>(
        <div className='eachNewsContainer' key={index}>
          <div>{record.party} - {record.date}</div>
          <div>{record.news}</div>
          <div>{record.source}</div>
          <div>{record.latitude} - {record.longitude}</div>
        </div>
      ))}
      {resultArea}
    </div>
  )
}

export default MainNews