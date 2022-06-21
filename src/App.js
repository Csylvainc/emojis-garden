import "./App.css";
import { useState } from "react";
import Search from "./components/Search";


function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [emojiPerPage, setEmojiPerPage] = useState(5);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="container">
      <Search handleChange={handleChange} search={search} setSearch={setSearch} currentPage={currentPage} setCurrentPage={setCurrentPage} emojiPerPage={emojiPerPage} setEmojiPerPage={setEmojiPerPage} />
    </div>
  );
}

export default App;
