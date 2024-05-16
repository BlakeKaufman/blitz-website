import "./index.css";
import setPageTitle from "../assets/hooks/setPageTitle";
import Slideshow from "./slideShow/slideShowConstructor";
import { slides } from "./slideShow/slides";
import TitleWithCards from "./titleWithCards";

const CARDS = [
  <li style={{ background: "red" }}>Card</li>,
  <li style={{ background: "green" }}>card 2</li>,
  <li style={{ background: "red" }}>Card</li>,
  <li style={{ background: "green" }}>card 2</li>,
  <li style={{ background: "red" }}>Card</li>,
  <li style={{ background: "green" }}>card 2</li>,
];

function App() {
  setPageTitle("Blitz Wallet | Bitcoin Lightning and Liquid Wallet");

  return (
    <div className="homepage">
      <Slideshow slides={slides} />
      <TitleWithCards title={"Blitz Wallet"} cards={CARDS} />
    </div>
  );
}

export default App;
