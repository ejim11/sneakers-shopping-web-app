import React, { useState } from "react";
import classes from "./App.module.scss";
import Gallery from "./components/Gallery/Gallery";

import Header from "./components/layout/Header";
import SneakerGallery from "./components/layout/SneakerGallery";
import SneakerInfo from "./components/layout/SneakerInfo";

import DisplayImageProvider from "./store/DisplayImageProvider";

function App() {
  const [displayGallery, setDisplayGallery] = useState(false);

  const openGalleryHandler = () => {
    setDisplayGallery(true);
  };

  const closeGalleryHandler = () => {
    setDisplayGallery(false);
  };

  return (
    <DisplayImageProvider>
      {displayGallery && <Gallery onClose={closeGalleryHandler} />}
      <Header />
      <main className={classes.main}>
        <SneakerGallery
          onOpen={openGalleryHandler}
          className={classes.gallery}
          small={classes.gallery__small}
          big={classes.gallery__big}
          left={classes.left}
          right={classes.right}
        />
        <SneakerInfo />
      </main>
    </DisplayImageProvider>
  );
}

export default App;
