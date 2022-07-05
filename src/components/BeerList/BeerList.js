import React from "react";
import axios from "axios";

import { FaBeer } from "react-icons/fa";
import { BeersList, BeerTile, Title, BeerImage } from "./BeerList.styled";
import CustomButton from "../CustomButton/CustomButton";
import { Header } from "../../styles/GeneralComponents/Header/Header.styled";
import TitleTile from "../TitleTile/TitleTile";
import TextTile from "../TextTile/TextTile";
import useLocalStorage from "../../hooks/useLocalStorage";
function BeerList({
  beerList,
  setBeerList,
  showFavBeers,
  currentPage,
  setCurrentPage,
  beerPerPage,
}) {
  const [favBeers, setFavBeers] = useLocalStorage("favBeers", []);

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
      <TitleTile>
        <TextTile>Name</TextTile>
        <TextTile>%</TextTile>
        <TextTile>pH</TextTile>
        <TextTile>Tagline</TextTile>
      </TitleTile>
      {beerList
        .filter((beer) => {
          if (!showFavBeers) return true;
          return favBeers.includes(beer.id);
        })
        .map((beer) => (
          <BeerTile key={beer.id}>
            <BeerImage src={beer.image_url} />
            <Title>{beer.name}</Title>
            <Title>{beer.abv}</Title>
            <Title>{beer.ph}</Title>
            <Title>{beer.tagline}</Title>
            <CustomButton
              isActive={favBeers.some((id) => id === beer.id)}
              isFavButton
              onClick={() => {
                addFavBeerHandler(beer.id);
              }}
            >
              <FaBeer />
            </CustomButton>
          </BeerTile>
        ))}
      <Header>
        <CustomButton onClick={showMoreBeers}>Show more beers</CustomButton>
      </Header>
    </BeersList>
  );
}

export default BeerList;
