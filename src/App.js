import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;

  const [progress, setProgress] = useState(0)

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="General"
              key="general"
              color="danger"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/business" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Business"
              color="warning"
              key="business"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/entertainment" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Entertainment"
              color="danger"
              key="entertainment"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/health" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Health"
              color="success"
              key="health"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/science" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Science"
              key="science"
              color="warning"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/sports" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Sports"
              key="sports"
              color="info"
              pageSize={pageSize}
            />
          }
          ></Route>
          <Route exact path="/technology" element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="Technology"
              color="secondary"
              key="technology"
              pageSize={pageSize}
            />
          }
          ></Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
