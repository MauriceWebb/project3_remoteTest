import React from "react";
import $ from "jquery";
// import "./script";

// Functions...
const handleHover = _ => {
  $(".validateLogIn").addClass("was-validated");
  if (
    document.querySelector("#emailInputLIM").checkValidity() &&
    document.querySelector("#passwordInputLIM").checkValidity()
  ) {
    $("#logInSubmit").attr({
      "data-toggle": "modal",
      "data-target": "#logInModal"
    });
  }
};

const handleSubmit = event => {
  if (
    !document.querySelector("#emailInputLIM").checkValidity() ||
    !document.querySelector("#passwordInputLIM").checkValidity()
  ) {
    event.preventDefault();
    event.stopPropagation();
    console.log("LogIn was not submitted.");
  } else {
    event.preventDefault();
    let email = $("#emailInputLIM")
        .val()
        .trim(),
      password = $("#passwordInputLIM")
        .val()
        .trim(),
      remember = $("#rememberMeLIM").is(":checked");
    // test log...
    console.log(email, password, remember);
    // reset form(s)...
    $("#emailInputLIM").val("");
    $("#passwordInputLIM").val("");
    $("#rememberMeLIM").prop("checked", false);
  }
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
              <form className="validateLogIn" noValidate>
                <div className="form-group">
                  <label htmlFor="emailInputLIM">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-btn shadow-sm"
                    id="emailInputLIM"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoComplete="username"
                    required
                  />
                  <small id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </small>
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInputLIM">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-btn shadow-sm"
                    id="passwordInputLIM"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a password.
                  </div>
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
                  onClick={e => {
                    handleSubmit(e);
                  }}
                  onMouseOver={_ => handleHover()}
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
