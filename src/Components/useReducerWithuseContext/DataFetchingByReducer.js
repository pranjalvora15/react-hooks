/*
// data fetching by useState and useReducer

import { useState, useEffect } from "react";
import axios from "axios";
function DataFetchingByReducer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    async function onLoad() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setLoading(false);
        setPost(response.data);

        setError("");
      } catch (e) {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      }
    }
    onLoad();
  }, []);
  return (
    <div>
      {loading ? "Loading ... " : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingByReducer;
*/

import { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

function DataFetchingByReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function onLoad() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        /* setLoading(false);   
           setPost(response.data);  
            setError(""); --> */ dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      } catch (e) {
        /*
        setLoading(false);
        setPost({});
        setError("Something went wrong!"); --> */ dispatch({
          type: "FETCH_ERROR",
        });
      }
    }
    onLoad();
  }, []);
  return (
    <div>
      {state.loading ? "Loading ... " : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingByReducer;
