import React from 'react';

import Footer from '../components/Footer.js';
import TitleBar from '../components/Header.js';

function Question({ data, store, answer = false }) {
  let _className, _title, _text;
  
  if (answer === false) {
    const name = store.checkView("question");
    _className = "view view-question " + name;
    _title = "Question";
    _text = data[store.deckIndex].chapters[store.chapterIndex].questions[store.questionIndex].questionText;
  } else {
    const name = store.checkView("question");
    _className = "view view-answer " + name;
    _title = "Answer";
    _text = data[store.deckIndex].chapters[store.chapterIndex].questions[store.questionIndex].answerText;
  }

  _text = _text.replace(/\*\*(.*?)\*\*/g , "<strong>$1</strong>");
  _text = _text.replace(/\*(.*?)\*/g , "<em>$1</em>");

  return (
    <div className={_className}>
      <TitleBar title={_title} store={store} version="backMenu" />
      <p className="question-text" dangerouslySetInnerHTML={{__html: _text}}></p>
      <Footer store={store} version="question" />
    </div>
  );
}

export default Question;