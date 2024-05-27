import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pug3 from "./pug3.png";

import "./Dogs.css";
import axios from "axios";
const Dogs = () => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_aYQrOxGbCKNdf6yOuL4nRLNT1IsQaMLWA9QHUA7hKMaXhiw0RCFhGjWzCqyOHkLR",
  });

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=100",
        requestOptions
      );

      const data = response.data;
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="head">
      <div className="caramelo">
        <h1>Search by dog ​​breed!</h1>
        <div className="inpt">
          <img className="oculos" src={pug3} alt="" />
          <input type="text" placeholder="Serch your favorite Dog/breed!" />
          <img className="oculo" src={pug3} alt="" />
        </div>
      </div>

      <div className="main">
        {posts.length === 0 ? (
          <p className="carregando">Loading...</p>
        ) : (
          posts.map((post) => (
            <div className="post">
              {post.breeds.map((breed) => (
                <Link key={post.id} to={`/${breed.name}`}>
                  <div className="cont">
                    <h2>{breed.name}</h2>
                    <p>Bred for: {breed.bred_for}</p>

                    <img src={post.url} className="images" alt="" />
                  </div>
                </Link>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dogs;
