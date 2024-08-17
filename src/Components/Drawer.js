import React, { useState } from "react";

export default function Drawer({ data, isOpen, toggleDrawer, setData }) {
  const handleConfirm = () => {
    toggleDrawer();
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-box">
        <div className="drawer-header">
          <p>Add Widget</p>
          <button onClick={toggleDrawer}>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
              alt="delete-sign"
            />
          </button>
        </div>
        <div className="drawer-content">
          <p>Personalize you dashboard by adding the following widget.</p>
          <div>
            <Tabs data={data} setData={setData} />
          </div>
        </div>
        <div className="drawer-footer">
          <button className="cancel-btn" onClick={toggleDrawer}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

const Tabs = ({ data, setData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleRemoveWidget = (categoryIndex, widgetIndex) => {
    const updatedCategories = [...data];
    updatedCategories[categoryIndex].widgets.splice(widgetIndex, 1);
    setData(updatedCategories);
    localStorage.setItem("dashData", JSON.stringify(updatedCategories));
  };

  const handleAddWidget = (categoryIndex, name, widgetText) => {
    const updatedCategories = [...data];
    updatedCategories[categoryIndex].widgets.push({
      widgetName: name,
      description: widgetText,
    });
    setData(updatedCategories);
    localStorage.setItem("dashData", JSON.stringify(updatedCategories));
  };

  const handleFormSubmit = (e, categoryIndex) => {
    e.preventDefault();
    const widgetName = e.target.widgetName.value;
    const widgetText = e.target.widgetText.value;
    if (widgetName && widgetText) {
      handleAddWidget(categoryIndex, widgetName, widgetText);
      e.target.reset(); // reset form
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {data?.map((category, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {category.categoryName.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <form
          className="widget-form"
          onSubmit={(e) => handleFormSubmit(e, activeTab)}
        >
          <input
            type="text"
            name="widgetName"
            placeholder="Widget Name"
            required
          />
          <input
            type="text"
            name="widgetText"
            placeholder="Widget Text"
            required
          />
          <button type="submit">Add Widget</button>
        </form>
        {data[activeTab]?.widgets?.map((widget, index) => (
          <div key={index} className="widget-item">
            <p>
              {widget.widgetName}: {widget.description}
            </p>
            <button
              className="close-btn"
              onClick={() => handleRemoveWidget(activeTab, index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
