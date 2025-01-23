import React from "react";

const SearchResult = ({ query }) => {
  // Sample search results based on the query
  const results = [
    { id: 1, name: "Bitcoin Podcast", type: "Podcast" },
    { id: 2, name: "Latest Crypto News", type: "News" },
    { id: 3, name: "Bitcoin Blogs", type: "Blog" },
  ].filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-container">
      {query ? (
        results.length > 0 ? (
          <ul className="search-results-list">
            {results.map((result) => (
              <li key={result.id}>
                <span className="result-name">{result.name}</span>
                <span className="result-type">{result.type}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{query}"</p>
        )
      ) : (
        <p>Type to search...</p>
      )}
    </div>
  );
};

export default SearchResult;
