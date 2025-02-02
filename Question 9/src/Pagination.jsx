import React, { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  let contentPerPage = 3;
  let startIndex = (page - 1) * contentPerPage;

  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ];

  let splicedContent = data.splice(startIndex, contentPerPage);
  console.log(splicedContent);

  return (
    <div>
      {splicedContent.map((item) => (
        <h1>{item}</h1>
      ))}
      {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
