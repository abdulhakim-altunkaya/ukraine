import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../styles/news.css"
//We will use zustand to store latitude and longitude information. 
//then map component will get this data and update the map accordingly
//Each time a person click on the news display here, zustand state will change and consequently the map will change. 
import useStore from '../store/useStore'; 

function MainNews() {
  const [resultArea, setResultArea] = useState("");
  const [listNews, setListNews] = useState([]);

  const setLatitude = useStore((state) => state.setLatitude);
  const setLongitude = useStore((state) => state.setLongitude);
  const setZoomLevel = useStore((state) => state.setZoomLevel);

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

  //update the zustand coordinates whenever user clicks on any news.
  const changeCoordinates = (newLatitude, newLongitude) => {
    const parsedLatitude = parseFloat(newLatitude);
    const parsedLongitude = parseFloat(newLongitude);
    setLatitude(parsedLatitude);
    setLongitude(parsedLongitude);
    setZoomLevel(12);//higher zoom levels are more detailed map
  }
  
  return (
    <div className='mainNews'> 
      {listNews.map((record, index) =>(
        <div className='eachNewsContainer'  
          onClick={() => changeCoordinates(record.latitude, record.longitude)} 
          key={index}>
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