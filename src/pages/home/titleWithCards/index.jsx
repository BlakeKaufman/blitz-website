import CardsSlider from "./cards";
import "./index.css";
export default function TitleWithCards({ cards, title }) {
  return (
    <div className="titleWithCards">
      <h2>{title}</h2>
      <CardsSlider cards={cards} />
    </div>
  );
}
