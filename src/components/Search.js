import dataEmojis from "../emojis.json";
import Liste from "./Liste";
import Pagination from "./Pagination";

const Search = ({ handleChange, search, setSearch, currentPage, emojiPerPage, setCurrentPage }) => {
    const indexOfLastEmoji = currentPage * emojiPerPage;
    const indexOfFirstEmoji = indexOfLastEmoji - emojiPerPage;
    setSearch(search.toLowerCase());
    let emojisSearch = dataEmojis.filter(emoji => emoji.keywords.includes(search))
    const currentEmoji = emojisSearch.slice(indexOfFirstEmoji, indexOfLastEmoji);

const Paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
}    
    return (
        <div className="Search">
            <h1>Recherche Emojis</h1>
            <input type="text" placeholder="🔎 recherche..." onChange={handleChange} />
            <ul className="Liste">
                {currentEmoji.map((emoji, index) => {
                    if (emoji.keywords.indexOf(search) !== -1) {
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
