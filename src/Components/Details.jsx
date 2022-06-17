import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [singleTodo, setSingleTodo] = React.useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/todos/${id}`).then((r) => {
      setSingleTodo(r.data);
    });
  }, [id]);

  return (
    <div>
      Details
      <h1>{singleTodo.value}</h1>
    </div>
  );
};

export default Details;
