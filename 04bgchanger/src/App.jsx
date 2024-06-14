import { useState } from "react"
import ColorButton from "./components/button";

function App() {
  const [color, setColor] = useState("white")
  const colors =['#D597AE', '#8AA6C1', '#6C8B74', '#9E83A2', '#D3C36D', '#C88945', '#C4746E', '#6B878E', '#A08AA5', '#D7A590'];

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
{/*     If we attach an OnClick Handler to each button then we have to repeat the code multiple times so instead 
        we can create a button component just like we created a component for card in previous Project (tailwindprops)

          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")} //onClick expects a func definition hence we define a callBack inside it
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button> */}
           {colors.map(color => (
            <ColorButton key={color} color={color} setColor={setColor} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App