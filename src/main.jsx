import {createRoot} from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import {store} from "./store.js";
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import "./index.css";
createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
		<ToastContainer position="top-center"></ToastContainer>
	</Provider>
);
