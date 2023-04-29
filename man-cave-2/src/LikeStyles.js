import { useState } from "react";

function LikeStyle({ styleId }) {
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount(count + 1);
    // Call likeStyle function passing styleId here if needed
  }

  return (
    <button onClick={handleLike}>
      {count} Likes {"\uD83D\uDC4D"}
    </button>
  );
}

export default LikeStyle;
