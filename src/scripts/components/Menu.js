import React from 'react';

import Footer from './Footer.js';
import TitleBar from './Header.js';

import { localStorage } from '../handlers/index.js';

function Menu({ store }) {
  let _className = store.menuOpen === true ? " open view-middle" : " close view-right";

  function changePage(name) {
    store.setActiveView(name);
    store.toggleMenu();
  }

  function changeTheme() {
    const themes = ["light", "dark", "retro"];
    let activeTheme = themes.find((el) => {
      return document.documentElement.classList.contains(`theme-${el}`);
    });
    const newTheme = themes[themes.indexOf(activeTheme) + 1] || themes[0];
    document.documentElement.classList.replace(`theme-${activeTheme}`, `theme-${newTheme}`);
    localStorage.set("theme", `theme-${newTheme}`);
  }

  return (
    <div className={"view view-menu" + _className}>
      <TitleBar title="Menu" version="closeMenu" store={store} />
      <div className='list'>
        <ul>
          <li><p onClick={() => changePage("decks")}>Decks</p></li>
          <li><p onClick={() => changePage("chapters")}>Chapters</p></li>
          <li><p onClick={() => changePage("questions")}>Questions</p></li>
          <li><p onClick={() => changePage("question")}>Question</p></li>
          <li><p onClick={changeTheme}>Change Theme</p></li>
          <li><p onClick={store.toggleMenu}>Close</p></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;