import React, { useState } from "react";

function Hook1() {
  const [bookList, updateBook] = useState(["HTML", "CSS", "Javscript", "PHP", "Java"]);
  return (
    <div>
      <p>Hook1</p>
      <p>Total books: {bookList.length}</p>
      {bookList.map((bookname, index) => {
        return <p key={index}>{bookname}</p>;
      })}
    </div>
  );
}

export default Hook1;
