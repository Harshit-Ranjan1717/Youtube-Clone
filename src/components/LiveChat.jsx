import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomSentences } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const id = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomSentences() + "🚀🚀",
        })
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="w-[80%] h-[450px] ml-2 p-2 border border-black bg-gray-800 rounded-lg overflow-y-scroll  flex flex-col-reverse">
        <div>
          {chatMessages.map((c, idx) => (
            <ChatMessage key={idx} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-[80%] flex p-2 ml-2 border border-black" onSubmit={(e)=>{
          e.preventDefault();
          console.log(liveMessage);
          dispatch(addMessage({
            name:"Harshit",
            message:liveMessage
          }))
          setLiveMessage("")
      }}>
        <input
          className=" px-2 w-96 h-10 bg-gray-800"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder="Write Your comment"
        />
        <button className=" rounded-md px-4 py-1 mx-2 bg-green-600">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
