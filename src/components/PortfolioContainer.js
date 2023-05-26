import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioArray }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioArray.map(stock => <Stock key={stock.id} stock={stock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
