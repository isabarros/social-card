import React from 'react';
import './SocialCard.css';

const SocialCard = () => {
    return(
        <div>
            <img className='user-picture'
                 src='https://res.cloudinary.com/practicaldev/image/fetch/s--nBBZ2m5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ls565bghkq9uv8icae8d.png'
                 alt='user'/>
            <h3>Deva</h3>
            <p>Hello, world!</p>
        </div>);
};

export default SocialCard;