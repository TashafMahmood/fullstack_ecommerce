import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Routing from "./Routing";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}
