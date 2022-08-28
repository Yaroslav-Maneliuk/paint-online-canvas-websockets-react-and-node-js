import { React } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter, Router, Route, Navigate } from "react-router-dom";
import ToolBar from "./components/ToolBar";
import SettingsBar from "./components/SettingsBar";
import Canvas from "./components/Canvas";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/:id">
            <ToolBar />
            <SettingsBar />
            <Canvas />
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`} />
        </Switch>
      </div>
    </BrowserRouter>
    //   <BrowserRouter>
    //   <div className="app">
    //     <Router>
    //       <Route path="/:id">
    //         <Route path="/:id" element={<ToolBar />}>
    //         <Route path="/:id" element={<SettingsBar />}>
    //         <Route path="/:id" element={<Canvas />}>
    //       </Route>
    //       <Navigate to={`f${(+new Date()).toString(16)}`} />
    //     </Route>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
