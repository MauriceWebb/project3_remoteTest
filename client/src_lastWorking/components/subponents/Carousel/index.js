import React from "react";

const Carousel = props => {
  return (
    <div>
      <div className="container p-3">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div
            className="carousel-inner round_corner shadow-sm"
            style={{ height: 300 }}
          >
            <div className="carousel-item active position-relative">
              <div className="position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
                <h3 className="mt-n4 d-none d-md-block ">Slide 1</h3>
                <hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1" />
                <p className="lead px-5 text-break">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi porro
                  <span className="d-none d-md-inline">
                    {" "}
                    error quas repudiandae vero doloribus voluptatibus autem
                    tempora quod? Cum voluptate quasi velit quae nostrum
                    perspiciatis optio!
                  </span>
                  <span className="d-md-none">...</span>
                </p>
                <button
                  // href='#'
                  className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white"
                >
                  Learn more
                </button>
              </div>
              <img
                src="https://source.unsplash.com/random/?meditation"
                className="d-block w-100 center_img"
                alt="..."
              />
            </div>
            <div className="carousel-item position-relative">
              <div className="position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
                <h3 className="d-none d-md-block">Slide 2</h3>
                <hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1" />
                <p className="lead px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sed{" "}
                  <span className="d-none d-md-inline">
                    quos fugiat, quis minus quibusdam?
                  </span>
                  <span className="d-md-none">...</span>
                </p>
                <button
                  // href='#'
                  className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white"
                >
                  Learn more
                </button>
              </div>
              <img
                src="https://source.unsplash.com/random/?yoga"
                className="d-block w-100 center_img"
                alt="..."
              />
            </div>
            <div className="carousel-item position-relative">
              <div className="position-absolute d-flex flex-column justify-content-center justify-content-md-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
                <h3 className="mt-n4 d-none d-md-block">Slide 3</h3>
                <hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1" />
                <p className="lead px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore labore{" "}
                  <span className="d-none d-md-inline">
                    error sit illum cupiditate. Officiis modi excepturi
                    voluptatem! Repudiandae blanditiis commodi iste consequatur
                    necessitatibus ad facilis delectus!
                  </span>
                  <span className="d-md-none">...</span>
                </p>
                <button
                  // href='#'
                  className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white"
                >
                  Learn more
                </button>
              </div>
              <img
                src="https://source.unsplash.com/random/?wellness"
                className="d-block w-100 center_img"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
