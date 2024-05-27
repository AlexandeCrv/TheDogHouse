import React from "react";
import "./NewPost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import enviar from "./enviando.png";
import lixeira from "./lixeira.png";

const NewPost = () => {
  const navi = useNavigate();
  const [title, setTitle] = useState();
  const [breed, setBreed] = useState();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const createCont = (e) => {
    e.preventDefalt();
    console.log("cu");
  };

  return (
    <div className="novopost">
      <form onSubmit={(e) => createCont(e)}>
        <h1 className="h1newpost">Add a new breed if it isn't on the site!</h1>
        <div>
          <label htmlFor="Breed">Enter breed: </label>
          <input
            type="text"
            className="npinpt"
            placeholder="Add the new breed"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Breed">Breed for: </label>
          <input
            id="inpt"
            type="text"
            className="npinpt"
            placeholder="Add the new breed"
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <div
            onClick={() => document.querySelector(".input-field").click()}
            className="foorm"
          >
            {image ? (
              <img width={200} height={200} src={image} alt={fileName} />
            ) : (
              <div>
                <img className="absolute" src={enviar} alt="" set="" />
                <p>Add your img</p>
              </div>
            )}
            <input
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
              className="colaimg"
              type="file"
              accept="image/*"
              hidden
            />
          </div>
        </div>
        <span>
          {fileName}{" "}
          <img
            src={lixeira}
            onClick={() => {
              setFileName("No selected file.");
              setImage(null);
            }}
            alt=""
          />
        </span>
      </form>
      <div className="containermaior">
        <div className="npcont">
          <h1 className="nph1"> {title}</h1>
          <h5> Breed for : {breed}</h5>
          <div className="dentroimg">
            <img id="img" className="imgmesmo" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
