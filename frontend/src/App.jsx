import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
