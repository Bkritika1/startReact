import { useState } from "react";

export default function Background(){
    const[isActive, setisActive] = useState(false);

    function handlePictureClick(event){
        event.stopPropagation();
        setisActive(true);
    }
    function handleBackgroundClick(){
        setisActive(false);
    }
  return (
    <div className={`background ${!isActive ? "background--active" : ""}`}
    onClick={handleBackgroundClick}>
      <img
        className={`picture ${isActive ? "picture--active" : ""}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handlePictureClick}
      />
    </div>
  );
}
