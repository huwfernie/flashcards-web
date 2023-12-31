import React from 'react';

import Footer from '../components/Footer.js';
import List from '../components/List.js';
import TitleBar from '../components/Header.js';

function Questions({data, store}) {
  const name = store.checkView("questions");
  try {    
    return (
      <div className={`view view-questions ${name}`}>
        <TitleBar title="Questions" store={store} version="backMenu" />
        <List data={data[store.deckIndex].chapters[store.chapterIndex].questions} storeValue={store.questionIndex} storeHandler={store.loadQuestionIndex} />
        <Footer store={store} version="default" />
      </div>
    );
  } catch (error) {
    console.log(JSON.stringify(store));
  }
}

export default Questions;