import React from 'react';

function TitleBar({ title = "Decks", version, store}) {
    if (version === "closeMenu") {
        return (
            <header className="header">
                <p>
                    {title}
                <span className="menu-icon" onClick={store.toggleMenu}>close</span>
                </p>
            </header>
        )
    } else if (version === "backMenu") {
        return (
            <header className="header">
                <p>
                <span className="back-icon" onClick={store.showPrevView}>back</span>
                    {title}
                <span className="menu-icon" onClick={store.toggleMenu}>menu</span>
                </p>
            </header>
        )
    } else {
        return (
            <header className="header">
                <p>
                    {title}
                <span className="menu-icon" onClick={store.toggleMenu}>menu</span>
                </p>
            </header>
        )
    }
}

export default TitleBar;