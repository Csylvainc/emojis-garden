import dataEmojis from "../emojis.json";
import Liste from "./Liste";
import Pagination from "./Pagination";

const Search = ({ handleChange, search, setSearch, currentPage, emojiPerPage, setCurrentPage }) => {
    const indexOfLastEmoji = currentPage * emojiPerPage;
    const indexOfFirstEmoji = indexOfLastEmoji - emojiPerPage;
    const currentEmoji = dataEmojis.slice(indexOfFirstEmoji, indexOfLastEmoji);

const Paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
}    
    return (
        <div className="Search">
            <h1>Recherche Emojis</h1>
            <input type="text" placeholder="🔎 recherche..." onChange={handleChange} />
            <ul className="Liste">
                {currentEmoji.map((emoji, index) => {
                    setSearch(search.toLowerCase());
                    if (emoji.keywords.includes(search)) {
                        return (
                            <Liste
                                key={index}
                                title={emoji.title}
                                symbol={emoji.symbol}
                            />

                        );
                    }
                    return null;
                })}
            </ul>
            <Pagination currentEmoji={currentEmoji} indexOfFirstEmoji={indexOfFirstEmoji} indexOfLastEmoji={indexOfLastEmoji} totalEmojis={dataEmojis.length} emojiPerPage={emojiPerPage} paginate={Paginate}/>
        </div>
       
    );
};

export default Search;
