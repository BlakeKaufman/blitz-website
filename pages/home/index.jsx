import "./index.css";
import setPageTitle from "../assets/hooks/setPageTitle";
import Slideshow from "./slideShow/slideShowConstructor";
import { slides } from "./slideShow/slides";

function App() {
  setPageTitle("Blitz Wallet | Bitcoin Lightning and Liquid Wallet");

  return (
    <div className="homepage">
      <Slideshow slides={slides} />
    </div>
  );
}

export default App;
