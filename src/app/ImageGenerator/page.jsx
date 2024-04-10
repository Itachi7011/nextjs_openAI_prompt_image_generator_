"use client";
import { useEffect, useState  , useRef } from "react";
import ReactDOMServer from 'react-dom/server';

const ImageGenerator = () => {
  const [input, setInput] = useState("");
  const generatedImageDiv = useRef(null);
  let name, value;
  // Go to Open Ai and Generate your own API key and paste in API_Key value
  const API_Key = "";
("new-generated-image");
  const handleInput = (e) => {
    name= e.target.name;
    value = e.target.value;
    setInput({...input,[name]:value})
  }
  
  const get_images = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_Key}`,
  
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: JSON.stringify(input),
        n: 4,
        size: "256x256",
      }),
    };
    try{
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log(data);
      data?.data.foreach((imageObject) => {
      const imageContainer = document.createElement("div");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageObject.url);
      imageContainer.appendChild(imageElement);
      generatedImageDiv.appendChild(imageContainer);
      })

    }catch (e) {
      console.log("Error during getting image" + e);
    }
  }


  return (
    <>
      <div className="main-div">
        <h1>Enter text in Input Bar and Press Enter Button</h1>
        <div className="main-title1">
          <h1>Open-AI API Image Generator</h1>
        </div>
        <div className="input-div">
          <input type="text" id="main-input" name="main-input"  onChange={handleInput}/>
          <icon id="enter-btn" onClick={get_images} >➢</icon>
        </div>
        <div id="new-generated-image" width="300" height="300" ref={generatedImageDiv}></div>
      </div>
    </>
  );
};
export default ImageGenerator;
