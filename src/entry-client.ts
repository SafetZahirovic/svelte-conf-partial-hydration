import "./app.css";
import { hydrate, lazy } from "./hydrate";

hydrate();
lazy();

window.initMap = function ready() {
	window.mapReady = true;
};
