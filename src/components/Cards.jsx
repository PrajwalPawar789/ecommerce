import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');

        const result = await response.json();
        console.log(result);

        setData(result);
      } catch (error) {

        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
        {
            data.map( (index) => {
                <Card newarray={index} />
              })
        }
    </div>
  );
};

export default Cards;
