import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div
      className="main-card-continer"
      onClick={() => {
        navigate("/home", { state: { id: data?.id } });
      }}
    >
      <div>
        <div className="book-image-card">
          <img src={data.img} alt="" />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <div className="title-card">{data.title}</div>
          <div className="price-book-card">{data.price}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
