import React, {useState} from "react";
import axios from "axios";
import {keccak256} from "js-sha3";
import "../../styles/inputs.css";
import "../../styles/newswrite.css"

function NewsWrite() {
  const [reporter, setReporter] = useState("");
  const [party, setParty] = useState("");
  const [newsText, setNewsText] = useState("");
  const [datetime, setDatetime] = useState("");
  const [source, setSource] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [resultArea, setResultArea] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reporter2 = keccak256(reporter);
    try {
      const newsObject = {
        reporter2,
        party,
        newsText,
        datetime,
        source,
        latitude,
        longitude,
      };
      console.log(newsObject);
      const res = await axios.post("http://localhost:5000/api/save-news", newsObject);
      setResultArea(res.data.message);
    } catch (error) {
      console.log(error.message)
/*       if (error.response) {
        setResponse(error.response.data.message);
        console.log(error.message);
      } else {
        setResponse("An error happened while saving the news");
        console.log(error.message);
      } */
    }
  }

  return (
    <div className="newsWriteDiv">
      <form className="newsWriteForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputParty">Party:</label>
          <input className="inputFields" type="number" id="inputParty" 
            value={party} onChange={(e) => setParty(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="inputNews">News:</label>
          <textarea className="textAreaClass" type="text" id="inputNews" 
            value={newsText} onChange={(e) => setNewsText(e.target.value)} required >
          </textarea>
        </div>
        <div>
          <label htmlFor="inputDate">Select Date and Time:</label>
          <input type="datetime-local" id="inputDate" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="inputSource">Source link:</label>
          <input className="inputFields" type="text" id="inputSource" 
            value={source} onChange={(e) => setSource(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="inputLatitude">Latitude:</label>
          <input className="inputFields" type="number" step="0.000001" id="inputLatitude"
            value={latitude} onChange={(e) => setLatitude(e.target.value)} required  />
        </div>
        <div>
          <label htmlFor="inputLongitude">Longitude:</label>
          <input className="inputFields" type="number" step="0.000001" id="inputLongitude"
            value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="inputReporter">Reporter:</label>
          <input className="inputFields" type="text" id="inputReporter" 
            value={reporter} onChange={(e) => setReporter(e.target.value)} required />
        </div>
        <button className="button7007" type="submit">Save News</button>
      </form>
      <div>{resultArea}</div>
    </div>
  );
}

export default NewsWrite
