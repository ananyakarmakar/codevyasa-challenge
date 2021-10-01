import React, { useState, useEffect } from "react";
import "./Body.css";

import FriendInfoCard from "../FriendInfoCard/FriendInfoCard";
import NameAddTextBox from "../NameAddTextBox/NameAddTextBox";

const Body = (props) => {
  const [updateState, setUpdateState] = useState(0);
  const [friendListFiltered, setFriendListFiltered] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  const handleToggleFavoriteClick = (id) => {
    let tempData = friendsList;
    let objectToUpdate = tempData.filter((data) => data.id === id)[0];
    objectToUpdate.isFavorite = !objectToUpdate.isFavorite;
    tempData = tempData.filter((data) => data.id !== id);
    tempData.push(objectToUpdate);
    setFriendsList(tempData);
  };

  const handleDeleteClick = (id) => {
    let tempData = friendsList;
    let tempDataAfterDelete = tempData.filter((data) => data.id !== id);
    setFriendsList(tempDataAfterDelete);
  };

  const handleEnterFriendName = (name) => {
    let tempData = friendsList;
    tempData.push({
      id: new Date().getTime(),
      name: name,
      isFavorite: false,
    });
    setFriendsList(tempData);
    setUpdateState(updateState + 1);
  };

  useEffect(() => {
    if (props.searchKeyword === "") {
      setFriendListFiltered(friendsList);
    } else {
      let filteredNames = friendsList.filter(
        (data) =>
          data.name.toLowerCase().search(props.searchKeyword.toLowerCase()) >= 0
      );
      setFriendListFiltered(filteredNames);
    }
  }, [props.searchKeyword, friendsList]);

  return (
    <div className="bodyContainer">
      <NameAddTextBox enterFriendName={handleEnterFriendName} />
      <div className="friendsInfoCardHolder">
        {friendListFiltered.length != 0 ? (
          friendListFiltered
            .sort(function (a, b) {
              if (props.sortBy === "id")
                return a.id - b.id || a.name.localeCompare(b.name);
              return (
                b.isFavorite - a.isFavorite || a.name.localeCompare(b.name)
              );
            })
            .map((data) => (
              <FriendInfoCard
                data={data}
                toggleFavoriteClick={handleToggleFavoriteClick}
                deleteClick={handleDeleteClick}
              />
            ))
        ) : (
          <div className="nothing">Nothing to show</div>
        )}
      </div>
    </div>
  );
};

export default Body;
