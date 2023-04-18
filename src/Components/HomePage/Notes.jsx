import React, { useState, useRef } from "react";
import "./Notes.css";

function Notes() {
    let textarea_ref = useRef(null);
    let [notes,setNotes] = useState("");

    let onClick = () => {
        textarea_ref.current.value = "";
        localStorage.setItem("notes","");
    }
  return (
    <div className="notes-card">
      <p className="caption-notes">All notes</p>
      <div className="content-notes">
        <textarea
        ref={textarea_ref}
        defaultValue={localStorage.getItem("notes")}
          name=""
          id=""
          cols="32"
          rows="11"
          className="content-goes-here"
          onChange={(e) => {
            setNotes(e.target.value);
            console.log(e.target.value);
            localStorage.setItem("notes",e.target.value);
          }}></textarea>
      </div>
      <div className="edit-icon" onClick={onClick}>
        <img src="pencil-icon.png" alt="" className="pencil-icon" />
      </div>
    </div>
  );
}

export default Notes;
