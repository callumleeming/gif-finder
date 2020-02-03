import React from "react";
import searchGifs from "../services/gif-service";

function Search() {
  const [inputState, setInputState] = React.useState("");
  const [imagesState, setImagesState] = React.useState([]);

  function onChange(event) {
    setInputState(event.target.value);
  }

  function onSubmit() {
    searchGifs(inputState).then(response => {
      setImagesState(
        response.data.data.map(image => {
          return image.images.original.webp;
        })
      );
    });
  }

  return (
    <div>
      <input type="text" value={inputState} onChange={onChange} />
      <button onClick={onSubmit}>Search!</button>
      <div class="image-section">
        {imagesState.map((url, index) => {
          return (
            <div class="image-section-item">
              <img key={index} src={url} alt="Loading..." />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
