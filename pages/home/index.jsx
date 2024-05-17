import "./index.css";
import setPageTitle from "../assets/hooks/setPageTitle";
import Slideshow from "./slideShow/slideShowConstructor";
import { slides } from "./slideShow/slides";
import TitleWithCards from "./titleWithCards";
import { BlitzCards } from "./cards";

function App() {
  setPageTitle("Blitz Wallet | Bitcoin Lightning and Liquid Wallet");

  return (
    <div className="homepage">
      <Slideshow slides={slides} />
      <TitleWithCards title={"Blitz Wallet"} cards={BlitzCards} />
    </div>
  );
}

export default App;
