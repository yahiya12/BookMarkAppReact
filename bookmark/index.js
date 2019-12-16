import React,{Fragment, useState} from 'react';
import ReactDom from 'react-dom';
import LinkCard from './components/LinkCard';
import './main.css';
const App = () => {
    const [cardData, setCardData]= useState([{linkName:'my link',linkHref:'https://github.com'}]);
    const [newCard, setNewCard] = useState({linkName:'',linkHref:''}); 

    const dispatchCardSet = (payload) => {
        let oldArray = cardData;
        let newArray = [...oldArray,payload];
        setCardData(newArray);
        setNewCard({linkHref:'', linkName:''});
    }
    
    return (
        <Fragment>
            <nav className="navigation">
                <a><img height='40px' width='auto' src='https://cdn.pixabay.com/photo/2013/03/29/13/38/bookmark-97575_1280.png'></img></a>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
            <main>
                <div className="leftContent">
                    <img src="https://cdn.pixabay.com/photo/2012/04/03/13/26/book-25155_1280.png" />
                    <form onSubmit={e => e.preventDefault()}>
                        <h2 className="formTitle">Add a bookmark</h2>
                        <div>
                            <label 
                            httmlFor="linkTitle"
                            className="formLabel">Enter a Name for Bookmark:</label>
                            <input 
                            value={newCard.linkName}
                            onChange={e => setNewCard({...newCard,linkName:e.currentTarget.value})}
                            type="text"
                            name="linkTitle"
                            minLength="1"
                            maxLength="30"
                            placeholder="25 characters max">
                            </input>
                        </div>
                        <div>
                        <label 
                            htmlFor="linkHref"
                            className="formLabel">Enter the Link of the page you want to Bookmark:</label>
                            <input 
                             value={newCard.linkHref}
                             onChange={e => setNewCard({...newCard,linkHref:e.currentTarget.value})}
                            type="url"
                            name="linkHref"
                            placeholder="Should be in the form of https">
                            </input>
                        </div>
                        <button onClick={() => dispatchCardSet(newCard)}>Bookmarked</button>
                    </form>
                </div>
                <div className="rightContent">
                    <LinkCard cards={cardData}/>
                    
                </div>
            </main>
        </Fragment>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)