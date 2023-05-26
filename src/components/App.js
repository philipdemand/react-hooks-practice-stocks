import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([])
  const [buttonState, setButtonState] = useState(null)
  const [menuValue, setMenuValue] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => {
        setStocks(data);
      })
  }, []);

  function handleSort(string) {
    setButtonState(string)
  }

  function handleFilter(value) {
    setMenuValue(value)
  }

  const filteredStocks = stocks.filter(stock => {
    if (menuValue === "Sportswear") {
      return stock.type === "Sportswear"
    } else {
      if (menuValue === "Tech") {
        return stock.type === "Tech"
      } else {
        if (menuValue === "Finance") {
          return stock.type === "Finance"
        } else {
          return true
        }
      }
    }
  })

  const sortedStocks = filteredStocks.sort((a, b) => {
    if (buttonState === "Alpha") {
      return a.name.localeCompare(b.name)
    } else {
      if (buttonState === "Price") {
        return a.price - b.price
      } else {
        return true
      }
    }
  })

  return (
    <div>
      <Header />
      <MainContainer 
      stocks={sortedStocks}
      handleSort={handleSort}
      handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
