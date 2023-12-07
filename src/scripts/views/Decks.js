import React from 'react';

import Footer from '../components/Footer.js';
import List from '../components/List.js';
import TitleBar from '../components/Header.js';

function Decks({data, store}) {
  const name = store.checkView("decks");
  return (
    <div className={`view view-decks ${name}`}>
      <TitleBar title="Decks" store={store} />
      <List data={data} storeValue={store.deckIndex} storeHandler={store.loadDeckIndex} />
      <Footer store={store} />
    </div>
  );
}

export default Decks;

