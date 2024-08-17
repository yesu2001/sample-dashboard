import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";

export default function Main() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(!open);

  useEffect(() => {
    const dashData = localStorage.getItem("dashData");
    setData(JSON.parse(dashData));
  }, []);

  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>CNAPP Dashboard</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button className="btn1" onClick={openDrawer}>
            Add Widget
            <img
              width="14"
              height="14"
              src="https://img.icons8.com/ios-glyphs/545454/14/plus-math.png"
              alt="plus-math"
              style={{ marginLeft: "5px" }}
            />
          </button>
          <button className="btn1">
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material-rounded/545454/20/available-updates.png"
              alt="available-updates"
            />
          </button>
          <button className="btn1">
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/ios-filled/545454/20/menu-2.png"
              alt="menu-2"
            />
          </button>
          <button
            className="btn1"
            style={{
              borderColor: "#14147d",
              color: "#14147d",
              fontWeight: 600,
            }}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/14147d/24/clock.png"
              alt="clock"
              style={{ marginRight: "5px" }}
            />
            <p style={{ fontSize: "12px", marginRight: "5px" }}>Last 2 days</p>
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </button>
        </div>
      </div>
      <div style={{ marginTop: "25px", marginLeft: "5px" }}>
        {data?.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h5>{item?.categoryName}</h5>
            <div className="category-list">
              <div className="list-content">
                {item.widgets.map((widget, index) => (
                  <div
                    key={index}
                    style={{
                      height: "150px",
                      width: "350px",
                      borderRadius: "5px",
                      padding: "15px",
                      background: "white",
                    }}
                  >
                    <h5>{widget.widgetName}</h5>
                    <p
                      style={{
                        color: "#A4A4A4",
                        textAlign: "center",
                        paddingTop: "25px",
                      }}
                    >
                      {widget.description}
                    </p>
                  </div>
                ))}
                <div
                  style={{
                    height: "150px",
                    width: "400px",
                    borderRadius: "8px",
                    padding: "15px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button className="btn2" onClick={openDrawer}>
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/ios-glyphs/a1a1a1/14/plus-math.png"
                      alt="plus-math"
                      style={{ marginRight: "5px" }}
                    />
                    Add Widget
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && <div className="overlay" onClick={openDrawer}></div>}
      <Drawer
        isOpen={open}
        toggleDrawer={openDrawer}
        data={data}
        setData={setData}
      />
    </div>
  );
}
