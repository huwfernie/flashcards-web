import React from 'react';

function List({ data, storeValue, storeHandler }) {
    return (
        <div className="list">
            <ul>
                <Items data={data} store={{ storeValue: storeValue, storeHandler: storeHandler }} />
            </ul>

        </div>
    );
}

function Items({ data, store }) {
    try {
        return data.map((item, index) => {
            // Items will have a Title or a questionText key/value
            let _text = item.title;
            if (item.title === undefined) {
                _text = item.questionText.replace(/\*/g, "").substring(0, 18).trim() + '...';
            }

            return (
                <li key={index} onClick={() => { store.storeHandler(index); }}>
                    <p>
                        <span>{_text}</span>
                        <span> &#8594;</span>
                    </p>
                </li>
            )
        })
    } catch (error) {
        return null;
    }
}

export default List;