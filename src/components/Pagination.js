import React from "react";

const Pagination = ({ emojiPerPage, totalEmojis, paginate}) => {
    const pageNumbers = []
    let pages = totalEmojis / emojiPerPage
    console.log('total emojis' +totalEmojis);
    console.log('emojis per page ' +emojiPerPage);
    console.log('nb pages :'+pages);
    for (let i= 1; i <= Math.ceil(pages); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);

    return (
        <nav className="w-75">
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                      <a onClick={() => paginate(number)} href="!#" className="page-link">
                        {number}
                      </a>      
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination