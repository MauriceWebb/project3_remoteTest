import React from 'react';

const ResultCard = (props) => {
    return ( 
        <div>
            <div className="card round_corner card_fx">
                <img src="https://source.unsplash.com/random/300x200?alfalfa" className="card-img-top" alt="..."/>
    <div className="card-body text-center-">
      <h5 className="card-title text-center text-sm-left">Card title that</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			<a href="#" className="btn rounded-btn ui_btn2 border-0 text-white">Learn more</a>
    </div>
  </div>
        </div>
     );
}
 
export default ResultCard;