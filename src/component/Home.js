import "./styles.css";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const { state } = useLocation();
  const [bookData, setBookData] = useState([]);

  const bookListData = useCallback(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "bookListData", {})
      .then((res) => {
        setBookData(res.data.rows.filter((book) => book?.id === state?.id));
      });
  }, [state?.id]);
  useEffect(() => {
    bookListData();
  }, [bookListData]);

  return (
    <div className="main-book-box">
      <div className="img-responsive">
        <img src={bookData[0]?.img} alt="" />
      </div>
      <div className="description-box">
        <div className="heading">
          <h1>{bookData[0]?.title} </h1>
          <h4>
            Author: <em>{bookData[0]?.authorname}</em>
          </h4>
        </div>
        <div className="description">
          <p>{bookData[0]?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
