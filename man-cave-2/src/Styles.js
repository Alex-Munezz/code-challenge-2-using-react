import {  useState } from "react";

function Styles() {
  const [styles] = useState([]);


  return (
    <div id="styles">
        <h1>The Man Cave Collection😎:</h1>
      {styles.map((style) => (
        <div key={style.id} className="style">
        </div>
            ))}
          </div>
      )}
export default Styles;
