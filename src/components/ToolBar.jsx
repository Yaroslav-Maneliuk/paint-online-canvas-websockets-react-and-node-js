import React from "react";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Eraser from '../tools/Eraser';
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";

const ToolBar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar-btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="toolbar-btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      />
      <button className="toolbar-btn circle" />
      <button
        className="toolbar-btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      />
      <button className="toolbar-btn line" />
      <input type="color" style={{ marginLeft: 10 }} />
      <button className="toolbar-btn undo" />
      <button className="toolbar-btn redo" />
      <button className="toolbar-btn save" />
    </div>
  );
};

export default ToolBar;
