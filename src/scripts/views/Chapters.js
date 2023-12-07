import React from 'react';

import Footer from '../components/Footer.js';
import List from '../components/List.js';
import TitleBar from '../components/Header.js';

function Chapters({data, store}) {
  const name = store.checkView("chapters");
  return (
    <div className={`view view-chapters ${name}`}>
      <TitleBar title="Chapters" store={store} version="backMenu" />
      <List data={data[store.deckIndex].chapters} storeValue={store.chapterIndex} storeHandler={store.loadChapterIndex} />
      <Footer store={store} />
    </div>
  );
}

export default Chapters;