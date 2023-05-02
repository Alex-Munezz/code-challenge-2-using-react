import { useState } from "react";

function Styles() {
  const [styles, setStyles] = useState([]);

  const deleteStyle = (id) => {
    setStyles(styles.filter((style) => style.id !== id));
  };

  return (
    <div id="styles">
      <h1>The Man Cave Collection😎:</h1>
      {styles.map((style) => (
        <div key={style.id} className="style">
          <h3>{style.name}</h3>
          <p>{style.description}</p>
          <img src={style.image} alt={style.name} />
          <button onClick={() => deleteStyle(style.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Styles;
