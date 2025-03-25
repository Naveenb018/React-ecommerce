import React, { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Collections from "../Components/Collections";
import Footer from "../Components/Footer";

import { Gents, Women } from "./data";
import WomensCollection from "../Components/WomensCollection";

const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [womenFashion, setWomenFashion] = useState(Women)
  console.log(Gents);
  console.log(Women);
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion = {gentsFashion}/>
      <WomensCollection womenFashion = {womenFashion} />
      <Footer />
    </div>
  );
};

export default MainPage;
