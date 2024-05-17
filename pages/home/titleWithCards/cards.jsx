import "./cards.css";

export default function CardsSlider({ cards }) {
  return (
    <div className="globalCardsContainer">
      <ul className="cardsContainer">
        {/* <li
          style={{
            width: window.innerWidth * 0.2,
            background: "green",
            left: `${0 * 320}px`,
          }}
          className="card"
        ></li> */}
        {cards.map((card, index) => {
          return (
            <li
              style={{
                background: "red",
                left: `${index * 360 + window.innerWidth * 0.1}px`,
                backgroundImage: `linear-gradient(to ${
                  Math.random() === 0 ? "bottom" : "top"
                } ${Math.random() === 0 ? "right" : "left"}, rgb(${
                  Math.random() * 255
                },${Math.random() * 255}, ${Math.random() * 255}), rgb(${
                  Math.random() * 255
                },${Math.random() * 255}, ${Math.random() * 255}))`,
                marginRight: index === cards.length - 1 ? 470 : 0,
              }}
              className="card"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
