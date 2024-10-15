import React from "react";
import "./App.css";
import data from "./data.json";
import omelette from "./assets/images/omelette.jpeg";
import Time from "./components/Time";
import List from "./components/List";
import Nutrition from "./components/Nutrition";

class App extends React.Component {
  render() {
    return (
      <div className="container px-3">
        <img src={omelette} alt="omelette" className="rounded mb-5" />
        <div>
          <h1 className="title mb-4">{data.meal}</h1>
          <p className="mb-5">{data.description}</p>
          <Time preparation={data.preparationTime} />
          <List title="Ingredients" ordered={true} items={data.ingredients} />
          <List
            title="Instructions"
            ordered={false}
            items={data.instructions}
          />
          <Nutrition nutrition={data.nutrition} />
        </div>
      </div>
    );
  }
}

export default App;
