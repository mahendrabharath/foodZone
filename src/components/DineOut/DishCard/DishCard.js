import React from 'react';
import './DishCard.scss';
import { StarFilled } from '@ant-design/icons';

const DishCard = props => {
    const { restaurantName, ratings, cuisine, clientName, price, imageURL } = props;
    const cost = '₹' + price;
    return <div className="post">
        <div className="header_post">
            <img src={imageURL} alt="" />
        </div>

        <div className="body_post">
            <div className="post_content">

                <h3>{cuisine}</h3>
                {/* <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                    dolorum ex exercitationem.</p> */}

                <div className="container_infos">
                    <div className="postedBy">
                        <span>{restaurantName}</span>
                        {clientName}
                    </div>

                    <div className="container_tags">
                        {/* <span>tags</span> */}
                        <div className="tags">
                            <ul>
                                <li>{ratings}<StarFilled/></li>
                                <li>{cost}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    // </div>
}

export default DishCard;