import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios
      .get(" http://localhost:8000/collects" + `query=${query}&page=${page}`)
      .then(({ data }) => console.log(data));
  }, [query, page]);

  return <div></div>;
};

export default Pagination;
