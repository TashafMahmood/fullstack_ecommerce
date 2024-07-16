import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import axios from 'axios'

export default function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}
