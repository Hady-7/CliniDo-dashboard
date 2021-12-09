import React from "react";
import "./editDoctor.css";

function EditDoctor() {
  return (
    <>
      <div className="container-fluid content">
        <div className="title">
          <h1>Add Doctor</h1>
        </div>
        <div className="areYouDoctorForm">
          <div className="container-fluid">
            <div className="sign">
              <form className="global" id="xyz" novalidate="novalidate">
                <input type="hidden" name="_token" value="" />
                <div className="row formRow">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="firstName">First name</label>
                      <input
                        id="firstName"
                        className="form-control input-lg formInputs"
                        type="text"
                        name="firstName"
                        placeholder="Type Your First Name Here..."
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="lastName">Last name</label>
                      <input
                        id="lastName"
                        className="form-control input-lg formInputs"
                        type="text"
                        name="lastName"
                        placeholder="Type Your Last Name Here..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="phone">Phone number</label>
                      <input
                        id="countryCode"
                        className="form-control input-lg center formInputs"
                        type="hidden"
                        name="countryCode"
                        value="20"
                      />
                      <input
                        className="form-control input-lg center formInputs"
                        id="mobile"
                        type="tel"
                        name="mobile"
                        maxlength="17"
                        autocomplete="off"
                        data-intl-tel-input-id="0"
                        placeholder="Enter Your Phone Number "
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="speciality">Choose a speciality</label>
                      <select
                        className="input-field input-lg formInputs"
                        id="mySelect"
                        name="drCategory"
                      >
                        <option name="drCity">Choose Category</option>
                        {/* <option *ngFor="let cat of DoctorCategory" [value]="cat.name">
                      {{ cat.name }}
                    </option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="city">Choose City</label>
                      <select
                        className="input-field input-lg valid formInputs"
                        id="selectCity"
                        name="drCity"
                      >
                        <option name="drCity">Choose City</option>
                        {/* // <option *ngFor="let city of cities" [value]="city.id">
                    //   {{ city.name }}
                    // </option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="area">Choose Area</label>
                      <select
                        id="selectArea"
                        name="drArea"
                        className="input-field input-lg formInputs"
                      >
                        <option value="0" id="drArea" name="drArea" selected>
                          {" "}
                          Choose Area
                        </option>
                        {/* <option  id="drArea" name="drArea"   [value]="area.id" *ngFor="let area of areas">
                      {{area.name}}
                    </option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="img">Doctor Image</label>
                      <input
                        id="img"
                        className="form-control input-lg center formInputs"
                        name="img"
                        placeholder="Enter Image URL"
                        type={"url"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="img">Doctor Fees</label>
                      <input
                        id="fees"
                        className="form-control input-lg center formInputs"
                        name="fees"
                        placeholder="Enter Doctor Fees"
                        type={"number"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="address">Doctor Address</label>
                      <input
                        id="address"
                        className="form-control input-lg center formInputs"
                        name="address"
                        placeholder="Enter Doctor Address"
                        type={"text"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <div className="form-group">
                      <label for="waiting">Waiting Time</label>
                      <input
                        id="waiting"
                        className="form-control input-lg center formInputs"
                        name="waiting"
                        placeholder="Enter Waiting time"
                        type={"time"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formCol">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-nav fnt-25 btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Send
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-body" id="model">
                            <h5>
                              Thank You Doctor, please download CliniDo Dr. App.
                              and we will contact you very soon.
                            </h5>
                            <div className="go-app">
                              <a href="#">
                                <img
                                  src="../../../assets/images/btn-google-play-dark-2-mobile.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/images/btn-apple-store-dark-mobile.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="modal-footer" id="modelfooter">
                            <button
                              type="button"
                              className="btn btn-lg btn-success"
                              data-bs-dismiss="modal"
                            >
                              Ok
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDoctor;
