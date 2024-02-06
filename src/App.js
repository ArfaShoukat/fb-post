import FBReactions from './components/FBReactions';
import FbBtan from './components/FbBtan';
import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare, faEllipsisVertical, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromAPI();
  }, []);

  function getPostFromAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.products);
      });
  }

  return (
    <div className="main-container">
      {posts.map((item, index) => (
        <div key={index} className="card">
          <div className="Side-Bar-dot">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>

          <div className="Side-Bar-cross">
            <FontAwesomeIcon icon={faTimes} />
          </div>

          <a href='https://www.facebook.com/ArfaShoakat/'><img className='Profile-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSs5LtE_s1tzYcgy7NZW7zpbLgVJARQld0i-pLUYADgSLbkkEzXw75stXLPRtofiFIOQI&usqp=CAU' alt="profile" /></a>
          <h3><a target='_blank' style={{ color: 'black' }} className='Name' href='https://www.facebook.com/ArfaShoakat/'>Arfa Shoukat</a></h3>
          <h5><a target='_blank' style={{ color: 'gray' }} className='Date1' href='https://www.facebook.com/ArfaShoakat/'>Dec 15,2023 </a></h5>
         
          <br />

       
          <p>
            Description: {item.description}
          </p>

          <FBReactions images={item.images} />

          <h1>{item.title}</h1>
          {Object.entries(item).map(([key, value]) => (
            key !== "images" && key !== "thumbnail" && key !== "description" && key !== "date" && (
              <p key={key}>
                {key}: {value}
              </p>
            )
          ))}
          <hr />

          <FbBtan />
          <div className="comment-icon">
            <FontAwesomeIcon icon={faComment} /> Comment {/* Comment Icon */}
          </div>
          <div className="share-icon">
            <FontAwesomeIcon icon={faShare} /> Share {/* Share Icon */}
          </div>
          <hr/>
        </div>
      ))}
     
    </div>
    
  );
}

export default App;
