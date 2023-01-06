import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom"
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}>
          <Router>
            <App/>
          </Router>
        </DevSupport>
    </React.StrictMode>
  );
