import React from "react";
import "./FriendInfoCard.css";

const FriendInfoCard = (props) => {
  return (
    <div className="FriendInfoCardContainer">
      <div className="left">
        <div className="friendName">{props.data.name}</div>
        <div className="subText">is your friend</div>
      </div>
      <div className="right">
        <span
          className="icon"
          onClick={() => props.toggleFavoriteClick(props.data.id)}
        >
          {props.data.isFavorite ? (
            <i className="fa fa-star" style={{ color: "#FFBA15" }}></i>
          ) : (
            <i className="fa fa-star-o"></i>
          )}
        </span>
        <span
          className="icon"
          style={{ marginLeft: "10px" }}
          onClick={() => props.deleteClick(props.data.id)}
        >
          <i class="fa fa-trash-o"></i>
        </span>
      </div>
    </div>
  );
};

export default FriendInfoCard;
