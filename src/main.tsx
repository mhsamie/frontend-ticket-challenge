import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//defer rendering the service worker
async function deferRender() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { server } = await import("./services/API/server");
  return server.start();
}

//render app fully after running the server
deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
