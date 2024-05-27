import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Umdog.css";
import { Link } from "react-router-dom";

const UmDog = () => {
  const [dogs, setDogs] = useState([]);
  const { name } = useParams();

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key":
              "live_aYQrOxGbCKNdf6yOuL4nRLNT1IsQaMLWA9QHUA7hKMaXhiw0RCFhGjWzCqyOHkLR",
          },
        }
      );

      const data = response.data;
      setDogs(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [name]);

  return (
    <div className="umdogmain">
      {dogs.length > 0 ? (
        dogs.map((item) => (
          <div className="geral" key={item.id}>
            <div className="UDdivimg">
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                className="udimages"
                alt={item.name}
              />
            </div>
            <div className="UDinfs" key={item.id}>
              <h2>{item.name}</h2>

              <p>Bred for : {item.bred_for}</p>
              <p>Life time : {item.life_span}</p>
              <p>height : {item.height.metric}</p>
              <p>weight : {item.weight.metric}</p>
              <p>temperament : {item.temperament}</p>
              <p>breed group : {item.breed_group}</p>
              <Link to="/Dogs">
                <input className="UDbtn" type="button" value="Back" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="udp">Loading...</p>
      )}
    </div>
  );
};

export default UmDog;
