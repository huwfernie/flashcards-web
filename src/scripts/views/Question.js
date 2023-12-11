import React from 'react';

import Footer from '../components/Footer.js';
import TitleBar from '../components/Header.js';

function Question({ data, store, answer = false }) {
  let _className, _title, _text;
  
  const question = data[store.deckIndex].chapters[store.chapterIndex].questions[store.questionIndex];
  
  if (answer === false) {
    const name = store.checkView("question");
    _className = "view view-question " + name;
    _title = "Question";
    _text = question.questionText;
  } else {
    const name = store.checkView("question");
    _className = "view view-answer " + name;
    _title = "Answer";
    _text = question.answerText;
  }

  _text = _text.replace(/\*\*(.*?)\*\*/g , "<strong>$1</strong>");
  _text = _text.replace(/\*(.*?)\*/g , "<em>$1</em>");

  return (
    <div className={_className}>
      <TitleBar title={_title} store={store} version="backMenu" />
      <div className="content">
        <p className="question-text" dangerouslySetInnerHTML={{__html: _text}}></p>
        { question.externalLink !== undefined && answer === true ? <p><a className="external-link" href={question.externalLink}>Learn More</a></p> : null} 
      </div>
      <Footer store={store} version="question" />
    </div>
  );
}

export default Question;