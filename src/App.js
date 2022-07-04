import { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "./components/Wrapper/Wrapper.styled";
import { Header } from "./components/Header/Header.styled";
import BeerList from "./components/BeerList/BeerList";
import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  const [beerList, setBeerList] = useState([]);
  const [showFavBeers, setShowFavBeers] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [beerPerPage, setBeerPerPage] = useState(2);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?page=1&per_page=${beerPerPage}`)
      .then((res) => {
        setBeerList(res.data);
        console.log("EFFECT DONE");
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("beer list: ", beerList);

  return (
    <Wrapper>
      <Header>
        <CustomButton onClick={() => setShowFavBeers(false)}>
          All Beers
        </CustomButton>
        <CustomButton
          onClick={() => {
            setShowFavBeers(true);
          }}
        >
          Favourite Beers
        </CustomButton>
      </Header>
      <BeerList
        beerList={beerList}
        showFavBeers={showFavBeers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setBeerList={setBeerList}
        beerPerPage={beerPerPage}
      />
    </Wrapper>
  );
}

export default App;
