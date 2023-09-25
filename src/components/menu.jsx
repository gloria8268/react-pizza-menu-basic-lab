import pizzaData from "../data.js";

function Pizza({ pizzaData }) {
  return pizzaData.map((el) => {
    // return !el.soldOut ? (
    //   <li className="pizza" key={el.id}>
    //     <img src={el.photoName} alt={el.name}></img>
    //     <div>
    //       <h3>{el.name}</h3>
    //       <p>{el.ingredients}</p>
    //       <span>{el.price}</span>
    //     </div>
    //   </li>
    // ) : null;
    return (
      <li className={`pizza ${el.soldOut ? "sold-out" : ""}`} key={el.id}>
        <img src={el.photoName} alt={el.name}></img>
        <div>
          <h3>{el.name}</h3>
          <p>{el.ingredients}</p>
          <span>{el.soldOut ? "Sold out" : el.price}</span>
        </div>
      </li>
    );
  });
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        <Pizza pizzaData={pizzaData} />
      </ul>
    </div>
  );
}

export default Menu;
