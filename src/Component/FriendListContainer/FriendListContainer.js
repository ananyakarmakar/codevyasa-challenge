import React, { useState } from "react";

import "./FriendListContainer.css";

import Header from "../Header/Header";
import Body from "../Body/Body";

const FriendListContainer = () => {
  const [sortBy, setSortBy] = useState("id");
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputBoxChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onHanldeKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(searchInput);
    }
  };

  const handleClearSearchClick = () => {
    setSearchKeyword("");
    setSearchInput("");
  };

  return (
    <>
      <div className="extraControllsContainer">
        <div className="searchContainer">
          <input
            placeholder="Search your friends"
            className="friendSearchInputBox"
            value={searchInput}
            onChange={handleInputBoxChange}
            onKeyPress={onHanldeKeyPress}
          />
          {searchKeyword === "" ? (
            <i
              className="fa fa-search"
              onClick={() => setSearchKeyword(searchInput)}
              style={{
                borderBottom: "1px solid gray",
                padding: "1.2%",
                cursor: "pointer",
              }}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className="fa fa-times"
              style={{
                borderBottom: "1px solid gray",
                padding: "1.2%",
                cursor: "pointer",
              }}
              aria-hidden="true"
              onClick={handleClearSearchClick}
            ></i>
          )}
        </div>
        <div className="sortByButtonContainer">
          <div
            className="sortByButton"
            onClick={() => setSortBy(sortBy === "id" ? "isFavorite" : "id")}
          >
            {sortBy === "id" ? "Sort by favorite" : "Clear sort"}
          </div>
        </div>
      </div>
      <div className="friendListContainer">
        <Header />
        <Body sortBy={sortBy} searchKeyword={searchKeyword} />
      </div>
    </>
  );
};

export default FriendListContainer;
