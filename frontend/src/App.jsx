import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import axios from 'axios';

export default function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
