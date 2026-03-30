import "./App.css";
import SearchBar from "./SearchBar";

// axios
//   .get(
//     import.meta.env.VITE_BASE_URL +
//       import.meta.env.VITE_TERMINATOR_URL +
//       "&apikey=" +
//       import.meta.env.VITE_REACT_APP_OMDBAPI_KEY,
//   )
//   .then((response) => console.log(response.data.Title))
//   .catch((e) => console.log(e.message));

function App() {
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
