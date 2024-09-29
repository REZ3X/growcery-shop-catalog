import React from "react";
import {createRoot} from "react-dom/client";
import "./style/style.css"
import CatalogWeb from "./components/CatalogWeb";

const root = createRoot(document.getElementById("root"));
root.render(<CatalogWeb />);