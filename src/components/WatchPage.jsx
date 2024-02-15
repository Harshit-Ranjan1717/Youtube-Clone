import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v")); // go read about url search param its of browser
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
    
      <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          <div>
          <iframe
            width="750"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1"}
            title="YouTube video player"
         
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  
           
          ></iframe>
          </div>
          <div className="w-full ml-12">
            <LiveChat></LiveChat>
          </div>
        </div>
        <CommentsContainer></CommentsContainer>
      </div>
    </>
  );
};

export default WatchPage;
