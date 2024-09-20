import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
const sidebar = () => {

  const [extended,setextended]=useState(false)
  const {onSent,prevPrompts,setRecentPrompt,newChat}= 
  useContext(Context)

  const loadPrompt= async(prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img   onClick={()=>setextended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div  onClick={()=> newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended?<p>New Chat</p>:null}
        </div>

        {extended?<div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((item,index) => {
            return (

              <div onClick={() => loadPrompt(item) } className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
         </div>
              
            )
          })}
          
        </div>
        :null
        }
        
      </div>


      <div className="bottom">
        <div className="bottom-item recent-entry ">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.history_icon} alt="" />
          {extended?<p>History</p>:null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
