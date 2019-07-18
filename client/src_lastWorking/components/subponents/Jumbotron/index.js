import React from 'react';

const Jumbotron = (props) => {
    return (
        <div>
            <div className="container mt-4 mt-3- mt-md-n5 mt-lg-n3">
            <div className="row mb-n5-">
              <div className="col-md-4 d-flex justify-content-center align-items-center mb-n5- mb-md-0 border-danger">
                <div className="container text-center- text-right text-md-left mb-3 mb-sm-0 px-0">
                  <div className="row">
                    <div className="col-6 col-md-12">
                      <h2>This is where a header goes!</h2>
                    </div>
                    <div className="col-6 col-md-12 d-flex flex-column">
                      <p className="text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        dolorum?
                      </p>
                      <button
                        className="btn rounded-btn shadow-sm ui_btn1 text-white border-0 mx-auto- mr-auto mx-md-0 px-3 py-2 px-md-0"
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-8 header_image mt-n5- mt-sm-n4-"
                style={{minHeight: 350}}
              />
            </div>
          </div>
        </div>
    );
}

export default Jumbotron;