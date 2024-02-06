import React from "react";

import FbImageLibrary from "react-fb-image-grid";

function FBReactions({ images }) {
  return (
    <div style={{ width: "100vw", height: "340px", margin:'auto' }}>
      <div className="images" style={{ width: "32%" }}>
        <FbImageLibrary images={images} />
      </div>
    </div>
  );
}

export default FBReactions;