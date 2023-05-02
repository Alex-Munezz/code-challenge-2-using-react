import { useState, useEffect } from "react";
import Styles from "./Styles";
import SearchStyles from "./SearchStyles";
import CommentsForm from "./CommentsForm";
import AddStyleForm from "./AddStyleForm";
import LikeStyles from "./LikeStyles";
import ManCave from "./man cave.JPG";
import "./App.css";
//import DeleteStyle from "./DeleteStyle";

function App() {
  const [styles, setStyles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

  useEffect(() => {
    fetch(`http://localhost:3000/styles?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setStyles(data))
      .catch((error) => console.error(error));
  }, [searchQuery]);


  function handleSearch(query) {
    setSearchQuery(query);
  }
  function addStyle(newStyle) {
    setStyles([...styles, newStyle]);
  }

  function commentStyle(id, comment) {
 window.prompt("Thanks for your comment")
  }

  return (
    <div className="container">
      <div className="new-image-container">
      <img src={ManCave} alt=" "/>
      </div>
      
      <div className="fieldset"> 
      <SearchStyles onSearch={handleSearch} />
      </div>
      <Styles styles={styles}/>
      <div className="styles-container">
        {styles.map((style) => (
          <div key={style.id} className="style">
            <h2>{style.name}</h2>
            <p>{style.description}</p>
            <img src={style.image} alt={style.name} />
            <p>Price: ${style.price}</p>
          <input type="text" placeholder="Add a comment" />
          <button onClick={() => commentStyle(style.id)}>Comment</button>
          </div>
        ))}
      </div>
      <LikeStyles />  
      {/* <DeleteStyle deleteStyle={DeleteStyle} /> */}
      <AddStyleForm onAdd={addStyle} />
      <CommentsForm />
    </div>
        )
     }
export default App;
