import React from "react";

const CardDeck = props => {
  return (
    <div>
      <div className="container shadow-sm- rounded p-3">
        <h3 className="text-center">The healthy way.</h3>
        <hr className="w-25 bg-success rounded py-1 ui_gradient2 border-0 mt-n1" />
        <div className="row">
          <div className="container card-deck">
            <div className="card border-0 card_fx round_corner overflow-hidden">
              <img
                src="https://source.unsplash.com/random/300x200?herb"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card border-0 card_fx round_corner overflow-hidden">
              <img
                src="https://source.unsplash.com/random/300x200?herbs"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card border-0 card_fx round_corner overflow-hidden">
              <img
                src="https://source.unsplash.com/random/300x200?herbal"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
