import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { addMovies } from "../utils/resultSlice";
import { Link } from 'react-router-dom';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200); // after 200ms call api
    return () => {
      clearTimeout(timer); // unmounting destroying the timer ensures that it doesn't keep running in the background.clearTimeout(timer), to restart things in re render};
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache:

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick=()=>{
    dispatch(addMovies(searchQuery))
  }

  
  return (
    <div className="grid grid-flow-col  p-4 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />
        <a href="/" className="cursor">
          <img
            className="h-8 mx-2"
            src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt="logo"
            height="60"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
        
          <input
            className="w-1/2  border p-2 border-gray-600 rounded-l-full ml-36 bg-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          
         <button onClick={handleSearchClick} className="border border-gray-600 p-2 rounded-r-full bg-gray-600 ">
            Search 🔍
          </button>
       
        </div>
        {showSuggestions && (
          <div className="ml-40 absolute  bg-gray-500 py-2 px-5 w-[450px]  rounded-md shadow-2xl">
            <ul>
              {suggestions.map((item, idx) => (
                <li
                  onMouseDown={() => setSearchQuery(item)}
                  key={idx}
                  className="py-2 shadow-sm bg-gray-500 hover:bg-gray-800 cursor-pointer"
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
      
        <img
          className="h-8"
          height="60"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="usericon"
        />
      </div>
    </div>
  );
};

export default Head;
