import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
  const [url, setUrl] = useState("");

  const handleInputSearch = (e) => {
    const searchInput = e.target.value;
    setUrl(
      import.meta.env.VITE_BASE_URL +
        "?t=" +
        searchInput +
        "&apikey=" +
        import.meta.env.VITE_REACT_APP_OMDBAPI_KEY,
    );
  };

  const searchHandler = () => {
    axios
      .get(url)
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleInputSearch(e)} />
      <button onClick={searchHandler}>Search Movie</button>
    </div>
  );
};

export default SearchBar;
