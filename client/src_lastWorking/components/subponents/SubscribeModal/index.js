import React from "react";
import $ from "jquery";

// Functions...
const handleHover = _ => {
  $(".validateSubscribe").addClass("was-validated");
  if (
    document.querySelector("#firstNameInputSM").checkValidity() &&
    document.querySelector("#lastNameInputSM").checkValidity() &&
    document.querySelector("#emailInputSM").checkValidity() &&
    document.querySelector("#passwordInputSM").checkValidity() &&
    document.querySelector("#passwordConfirmInputSM").checkValidity()
  ) {
    $("#subscribeSubmit").attr({
      "data-toggle": "modal",
      "data-target": "#subscribeModal"
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
    let name = [
        $("#firstNameInputSM")
          .val()
          .trim(),
        $("#lastNameInputSM")
          .val()
          .trim()
      ],
      email = $("#emailInputSM")
        .val()
        .trim(),
      password = $("#passwordInputSM")
        .val()
        .trim(),
      confirm = $("#passwordConfirmInputSM")
        .val()
        .trim(),
      remember = $("#rememberMeSM").is(":checked");
    // test log...
    console.log(name, email, password, confirm, remember);
    // reset form(s)...
    $("#firstNameInputSM").val("");
    $("#lastNameInputSM").val("");
    $("#emailInputSM").val("");
    $("#passwordInputSM").val("");
    $("#passwordConfirmInputSM").val("");
    $("#rememberMeSM").prop("checked", false);
  }
};

const Modal = props => {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="subscribeModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="subscribeModalTitle"
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
              <form className="validateSubscribe" noValidate>
                <div className="form-group">
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="firstNameInputSM">First Name</label>
                      <input
                        type="text"
                        className="form-control rounded-btn shadow-sm"
                        id="firstNameInputSM"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastNameInputSM">Last Name</label>
                      <input
                        type="text"
                        className="form-control rounded-btn shadow-sm"
                        id="lastNameInputSM"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <label htmlFor="emailInputSM">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-btn shadow-sm"
                    id="emailInputSM"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoComplete="username"
                    required
                  />
                  <small id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInputSM">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-btn shadow-sm"
                    id="passwordInputSM"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConfirmInputSM">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-btn shadow-sm"
                    id="passwordConfirmInputSM"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input round_corner p-2"
                    id="rememberMeSM"
                  />
                  <label className="form-check-label" htmlFor="rememberMeSM">
                    <small className="form-text text-white">Remember me</small>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn rounded-btn border-0 ui_gradient2 shadow-sm"
                  id="subscribeSubmit"
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
