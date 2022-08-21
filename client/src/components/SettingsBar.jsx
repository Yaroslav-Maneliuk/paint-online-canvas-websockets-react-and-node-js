import React from "react";
import toolState from "../store/toolState";

const SettingsBar = () => {
  return (
    <div className="settings-bar">
      <label htmlFor="line-width">Line width</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width"
        style={{ margin: "0 10px" }}
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Stroke color</label>
      <input
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        id="stroke-color"
        style={{ margin: "0 10px" }}
        type="color"
      />
    </div>
  );
};

export default SettingsBar;
