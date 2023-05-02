// import { useState } from "react";

// function DeleteStyle({ styles, deleteStyle }) {
//   const [id, setId] = useState("");
//   const [tempStyles, setTempStyles] = useState([]);

//   function handleDelete() {
//     setTempStyles(styles.filter((style) => style.id !== id));
//     deleteStyle(id);
//   }
  

//   return (
//     <div>
//       <h2>Delete a Style</h2>
//       <p>Enter the ID of the style you want to delete:</p>
//       <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
//       <button onClick={handleDelete}>Delete</button>
//       <div className="styles-container">
//         {styles && styles.map((style) => (
//           <div key={style.id} className="style">
//             <h3>{style.name}</h3>
//             <p>{style.description}</p>
//             <img src={style.image} alt={style.name} />
//           </div>
//         ))}
//       </div>
//       <div className="temp-styles-container">
//         {tempStyles.map((style) => (
//           <div key={style.id} className="style">
//             <h3>{style.name}</h3>
//             <p>{style.description}</p>
//             <img src={style.image} alt={style.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


