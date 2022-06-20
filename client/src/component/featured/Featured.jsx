// import React from 'react'
// import { InfoOutlined, PlayArrow } from "@material-ui/icons";
// import './featured.css'

// // style={{width:'100%',height:'100%',objectFit:'cover'}}
// const Featured = ({ type }) => {
//   return (
//     <div className="feature">
//       {type && <div className="category">
//       <span>{type === "movie" ? "Movies" : "Series"}</span>
//           <select className="select" name="genre" id="genre">
//             <option>Genre</option>
//             <option value="adventure">Adventure</option>
//             <option value="comedy">Comedy</option>
//             <option value="crime">Crime</option>
//             <option value="fantasy">Fantasy</option>
//             <option value="historical">Historical</option>
//             <option value="horror">Horror</option>
//             <option value="romance">Romance</option>
//             <option value="sci-fi">Sci-fi</option>
//             <option value="thriller">Thriller</option>
//             <option value="western">Western</option>
//             <option value="animation">Animation</option>
//             <option value="drama">Drama</option>
//             <option value="documentary">Documentary</option>
//           </select>
//       </div>

//       }
//       <img className="feature-img"
//         src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//         alt=""
//       />
//       <div className="info">
//         <img className="info-img"
//           src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
//           alt=""
//         />
//         <span className="desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
//           adipisci repellendus eum quasi illo, velit numquam, maxime tempora
//           sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
//           temporibus eum earum?
//         </span>
//         <div className="button">
//           <span className="buttons">
//             <button className="play">
//               <PlayArrow />
//               <span>Play</span>
//             </button>
//           </span>
//           <span className="button">
//             <button className="more">
//               <InfoOutlined />
//               <span>Info</span>
//             </button>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Featured


import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import "./featured.scss";

const Featured = ({ type, setGenre }) => { 
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
      src= "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/Matrix-movie-posters.jpg"
        // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured