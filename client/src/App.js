import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from "./components/Main";
import NewsWrite from "./components/subcomponents/NewsWrite";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/newswrite" element={<NewsWrite/>} />
          <Route path="/" element={<Main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
