import React, { useEffect, useState } from 'react';

import Decks from './views/Decks.js';
import Chapters from './views/Chapters.js';
import Questions from './views/Questions.js';
import Question from './views/Question.js';
import Menu from './components/Menu.js';

import '../styles/App.css';

import { localStorage } from './handlers/index.js';

const history = {
  deckIndex: localStorage.get("deckIndex") || 0,
  chapterIndex: localStorage.get("chapterIndex") || 0,
  questionIndex: localStorage.get("questionIndex") || 0,
  activeView: localStorage.get("activeView") || "decks"
}

function App() {
  const [appData, setAppData] = useState(null);
  const [deckIndex, setDeckIndex] = useState(history.deckIndex);
  const [chapterIndex, setChapterIndex] = useState(history.chapterIndex);
  const [questionIndex, setQuestionIndex] = useState(history.questionIndex);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState(history.activeView);
  const views = ["decks", "chapters", "questions", "question"];
  const [showAnswer, setShowAnswer] = useState(false);


  useEffect(() => {
    async function setup() {
      // const data = require('../../public/data.json');
      let data = await fetch("./data.json");
      data = await data.json();
      setAppData(data);
    }
    setup();
  }, []);

  if (appData === null) {
    return <div>waiting for data</div>
  }

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  function nextQuestion() {
    let _length = appData[store.deckIndex].chapters[store.chapterIndex].questions.length;
    if (questionIndex < _length - 1) {
      setQuestionIndex(questionIndex + 1);
      setShowAnswer(false);
    }
  }

  function prevQuestion() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setShowAnswer(false);
    }
  }

  function showNextView() {
    let index = views.indexOf(activeView);
    const length = views.length - 1;
    if (index + 1 <= length) {
      setActiveView(views[index + 1]);
      localStorage.set("activeView", views[index + 1]);
    }
  }

  function showPrevView() {
    let index = views.indexOf(activeView);
    if (index > 0) {
      setActiveView(views[index - 1]);
      localStorage.set("activeView", views[index - 1]);
    }
  }

  function loadDeckIndex(index) {
    // setActiveView("chapters");
    showNextView();
    setDeckIndex(index);
    localStorage.set("deckIndex", index);
  }

  function loadChapterIndex(index) {
    // setActiveView("questions");
    showNextView();
    setChapterIndex(index);
    localStorage.set("chapterIndex", index);
  }

  function loadQuestionIndex(index) {
    // setActiveView("question");
    showNextView();
    setQuestionIndex(index);
    localStorage.set("questionIndex", index);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function checkView(name) {
    const indexThis = views.indexOf(name);
    const indexActive = views.indexOf(activeView);

    if (indexThis === indexActive) {
      return "view-middle"
    } else if (indexThis < indexActive) {
      return "view-left"
    } else {
      return "view-right"
    }
  }

  const store = {
    deckIndex,
    chapterIndex,
    questionIndex,
    menuOpen,
    showAnswer,
    loadDeckIndex,
    loadChapterIndex,
    loadQuestionIndex,
    nextQuestion,
    prevQuestion,
    toggleMenu,
    toggleAnswer,
    setActiveView,
    showPrevView,
    checkView
  }

  return (
    <div className={"App " + activeView}>
      <Decks data={appData} store={store} />
      <Chapters data={appData} store={store} />
      <Questions data={appData} store={store} />
      <Question answer={store.showAnswer} data={appData} store={store} />
      {/* <Question answer={true} data={appData} store={store} /> */}
      <Menu store={store} />
    </div>
  );
}

export default App;
