import React from "react";
import $ from "jquery";

// Functions...
const handleSubmit = _ => {
  let email = $("#emailInputLIM")
      .val()
      .trim(),
    password = $("#passwordInputLIM")
      .val()
      .trim(),
    remember = $("#rememberMeLIM").is(":checked");
  console.log(email, password, remember);
};

const Modal = props => {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="logInModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="logInModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content ui_gradient3 border-0 round_corner shadow">
            <div
              className="modal-body p-5 text-white"
              style={{
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
              }}
            >
              <form>
                <div className="form-group">
                  <label htmlFor="emailInputLIM">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-btn shadow-sm"
                    id="emailInputLIM"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInputLIM">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-btn shadow-sm"
                    id="passwordInputLIM"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input round_corner p-2"
                    id="rememberMeLIM"
                  />
                  <label className="form-check-label" htmlFor="rememberMeLIM">
                    <small className="form-text text-white">Remember me</small>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn rounded-btn border-0 ui_gradient2 shadow-sm"
                  id="logInSubmit"
                  onClick={_ => {
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;