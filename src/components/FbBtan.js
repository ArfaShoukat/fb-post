
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import "./FbBtan.css";


const FbBtan = ({ onLike }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleLikeClick = () => {
    setShowEmojis(!showEmojis);
    if (onLike) {
      onLike();
    }
  };

  return (
    <div className="reactions-container">
              <div className="like-icon "  >
  <FontAwesomeIcon className="like-button" onClick={handleLikeClick} icon={faThumbsUp} /> Like 

</div>
  
     
      {showEmojis && (
        <div className="emojis-container">
        
          <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true" alt="emoji" />
          <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(6).gif?raw=true" alt="emoji" />
          <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(9).gif?raw=true" alt="emoji" />
        </div>
      )}
    </div>
    
  );
};

export default FbBtan;
