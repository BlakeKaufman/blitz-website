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
          console.log(typeof card.gradient);

          if (!card.title)
            return (
              <li
                key={card.length}
                style={{
                  left: `${
                    (cards.length - 1) * 370 + window.innerWidth * 0.1
                  }px`,
                  width: window.innerWidth * 0.2,
                  scrollSnapAlign: "none",
                  boxShadow: "none",
                }}
                className="card "
              ></li>
            );
          return (
            <li
              key={index}
              style={{
                left: `${index * 370 + window.innerWidth * 0.1}px`,
                backgroundImage: card.gradient
                  ? card.gradient
                  : `linear-gradient(to ${
                      Math.random() === 0 ? "bottom" : "top"
                    } ${Math.random() === 0 ? "right" : "left"}, rgb(${
                      Math.random() * 255
                    },${Math.random() * 255}, ${Math.random() * 255}), #fff9ff`,
                marginRight: index === cards.length - 1 ? 470 : 0,
              }}
              className="card"
            >
              <h1>{card.title}</h1>
              <h2>{card.desc}</h2>

              <button>{card.callToAction}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
