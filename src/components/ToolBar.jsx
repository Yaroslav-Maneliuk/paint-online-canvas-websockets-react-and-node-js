import React from "react";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from '../tools/Line';
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
      <button
        className="toolbar-btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button
        className="toolbar-btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      />
      <button
        className="toolbar-btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      />
      <input type="color" style={{ marginLeft: 10 }} />
      <button className="toolbar-btn undo" />
      <button className="toolbar-btn redo" />
      <button className="toolbar-btn save" />
    </div>
  );
};

export default ToolBar;
