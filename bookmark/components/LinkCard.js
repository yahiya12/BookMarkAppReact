import React, {Fragment} from 'react';
const LinkCard = props => {
    const linkImageStyle = {
        backgroundImage : 'url(\'https://cdn.pixabay.com/photo/2013/03/29/13/38/bookmark-97575_1280.png\')'
    }
    const mappedData = props.cards.map((card,i) => {
        return(
            <div key={i} className="linkCard">
                        <div className="linkCardImage" style={linkImageStyle} />
        <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
                    </div>

        )
    })
    return(
        <Fragment>
            {mappedData}
        </Fragment>
    )


}
export default LinkCard