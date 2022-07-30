import React, {useEffect, useState} from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {
  const [product,setProduct] = useState();

  const fetchData =() =>{
    fetch("https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report")
    .then((response) =>{
      return response.json();
    }).then((data)=>{
      let product = data.results
      setProduct(data);
    })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              data={product}
              compl={card.compliant}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
