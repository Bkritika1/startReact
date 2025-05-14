import { useState } from "react"

let initialShape = [
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: "circle", x: 250, y: 100 },

]

export default function TransformingArray() {
    const [shapes, setShapes] = useState(
        initialShape
    );
    function handleClick(){
        setShapes(
            shapes.map(shape =>{
                if(shape.type === 'circle'){
                    return{...shape, y: shape.y + 50};
                }else{
                    return shape;
                }
            })
        )
    }

    return (
        <>
      <div style={{ position: "relative", width: 400, height: 300, background: "#eee" }}>
      <button  style={{ background: "#eee"}} onClick={handleClick} >Move circles down!</button>

        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
              position: "absolute",
              left: shape.x,
              top: shape.y,
              width: 50,
              height: 50,
              backgroundColor: "skyblue",
              borderRadius: shape.type === "circle" ? "50%" : "0%",
            }}
          />
        ))}
      </div>
    </>
    )
}