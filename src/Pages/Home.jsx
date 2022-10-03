import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const fetchAndUpdateData = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  return loading ? (
    <h1>LOADING...</h1>
  ) : error ? (
    <h1>SOMETHING WENT WRONG</h1>
  ) : (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={2}>
        {data.map((product) => (
          <>
            <GridItem w='100%' h='10'>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image}></img>
          </GridItem>
        </>
      ))}
    </Grid>
    </div >
  );
}
