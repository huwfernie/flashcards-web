import React from 'react';

function Footer({store, version, toggleAnswer}) {

    if (version === "question") {
        return (
            <footer className="footer">
                <span onClick={store.prevQuestion}>Prev</span>
                <span onClick={store.toggleAnswer}>Flip</span>
                <span onClick={store.nextQuestion}>Next</span>
            </footer>
        )
    }
    else {
        return (
            <footer className="footer">
                FlashCards
            </footer>
        )
    }
}

export default Footer;