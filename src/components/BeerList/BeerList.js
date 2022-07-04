import React from "react";
import axios from "axios";

import AddFavBeerButton from "../AddFavBeerButton/AddFavBeerButton";
import { FaBeer } from "react-icons/fa";
import { BeersList, List, ListTile, BeerImage } from "./BeerList.styled";
import { useState } from "react";
import CustomButton from "../AddFavBeerButton/AddFavBeerButton";
import { Header } from "../Header/Header.styled";

function BeerList({
  beerList,
  setBeerList,
  showFavBeers,
  currentPage,
  setCurrentPage,
  beerPerPage,
}) {
  const [favBeers, setFavBeers] = useState([]);

  const addFavBeerHandler = (id) => {
    const newArray = favBeers.find((favId) => favId === id);

    if (!newArray) {
      setFavBeers((prevState) => [...prevState, id]);
    } else {
      setFavBeers((favBeers) => favBeers.filter((favId) => favId !== id));
    }
  };

  const showMoreBeers = async () => {
    try {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers/?page=${currentPage}&per_page=${beerPerPage}`
      );
      setBeerList((prevState) => [...prevState, ...res.data]);
      setCurrentPage((prevState) => prevState + 1);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <BeersList beerList={beerList}>
      {beerList
        .filter((beer) => {
          if (!showFavBeers) {
            return true;
          }
          return favBeers.includes(beer.id);
        })
        .map((beer) => (
          <List key={beer.id}>
            {/*List - BeerTile */}
            <BeerImage src={beer.image_url} />
            <ListTile>{beer.name}</ListTile>
            {/*TITLE*/}
            <ListTile>{beer.abv}</ListTile>
            <ListTile>{beer.ph}</ListTile>
            <ListTile>{beer.tagline}</ListTile>
            <AddFavBeerButton
              onClick={() => {
                addFavBeerHandler(beer.id);
              }}
            >
              <FaBeer />
            </AddFavBeerButton>
          </List>
        ))}
      <Header>
        <CustomButton onClick={showMoreBeers}>Show more beers</CustomButton>
      </Header>
    </BeersList>
  );
}

export default BeerList;
