import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, handleSort, handleFilter }) {

  const [portfolioArray, setPortfolioArray] = useState([])
  const [nextId, setNextId] = useState(1)

  function handleClick(ident) {
    const filteredForPort = stocks.filter(stock => stock.id === ident)
    const objectToCopy = filteredForPort[0];
    const newObject = Object.assign({}, objectToCopy);
    const newerObject = {
      id: nextId,
      ticker: newObject.ticker,
      name: newObject.name,
      type: newObject.type,
      price: newObject.price
    }
    setPortfolioArray([...portfolioArray, newerObject])
    setNextId(nextId + 1)
  }

  return (
    <div>
      <SearchBar handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handleClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioArray={portfolioArray} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
