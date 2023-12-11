import React from 'react';

function Footer({ store, version, toggleAnswer }) {

    if (version === "question") {
        return (
            <footer className="footer">
                <span onClick={store.prevQuestion}><p>Prev</p></span>
                <span onClick={store.toggleAnswer}><p>Flip</p></span>
                <span onClick={store.nextQuestion}><p>Next</p></span>
            </footer>
        )
    }
    else {
        return (
            <footer className="footer">
                <p>
                    FlashCards
                </p>
            </footer>
        )
    }
}

export default Footer;