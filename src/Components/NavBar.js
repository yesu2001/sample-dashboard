import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <p style={{ color: "#706f6f" }}>Home</p>
        <img
          width="10"
          height="10"
          src="https://img.icons8.com/ios-filled/706f6f/10/forward--v1.png"
          alt="forward--v1"
        />
        <p style={{ color: "#141873", fontWeight: "bold" }}>Dashboard V2</p>
      </div>
      <div className="searchBox">
        <img
          width="16"
          height="16"
          src="https://img.icons8.com/ios-filled/bbc9d8/50/search--v1.png"
          alt="search--v1"
        />
        <input type="text" placeholder="search anything" className="inputBox" />
      </div>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/pastel-glyph/20/appointment-reminders.png"
          alt="appointment-reminders"
        />
      </div>
    </div>
  );
}
