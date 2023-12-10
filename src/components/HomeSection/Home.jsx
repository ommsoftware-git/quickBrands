import React from "react";
import Banner from "./Banner/Banner";
import Audience from "./audience/Audience";
import DesignTemplates from "./designTemplates/DesignTemplates";

import Festival from "./BannerSlides/Festival";
import Memes from "./BannerSlides/Memes";
import Status from "./BannerSlides/Status";
import Slogan from "./BannerSlides/Slogan ";
import TopBanner from "./BannerSlides/TopBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <TopBanner />
      <Festival />
      <Memes />

      <DesignTemplates />
      <Status />
      <Slogan />
      <Audience />
    </>
  );
};

export default Home;
