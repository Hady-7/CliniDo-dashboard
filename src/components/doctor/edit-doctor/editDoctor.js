import React, { useState, useEffect } from "react";
import "./editDoctor.css";
import firebase from "../../../fbconifq/fbAuth";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, onSnapshot } from "firebase/firestore";

const citiesData = [
  {
    name: "Alexandria",
    areas: [
      "Borg El-Arab",
      "Semoha",
      "Elramel Station",
      "El-Betash",
      "Sedy Gaber",
      "Sedy Beshr",
    ],
  },
  {
    name: "Cairo",
    areas: [
      "Naser City",
      "6-october",
      "New Cairo",
      "El Shrouk",
      "El nozha",
      "Madinaty",
      "El- Rehab",
      "El-Mostabal",
    ],
  },
  {
    name: "Assuit",
    areas: ["Dayrot", "Qusiya", "MAnfalot", "Abnob", "El Badary", "Sahel Slem"],
  },
  {
    name: "BeniSuef",
    areas: [
      "Naser",
      "Ehnasya",
      "Smesta",
      "Beni Suef",
      "Bba",
      "El wasta",
      "El fashn",
    ],
  },
  {
    name: "Damietta",
    areas: [
      "Kafer said",
      "Farscore",
      "Kafer El batekh",
      "El tharka",
      "Damietta",
    ],
  },
  {
    name: "ElBeheira",
    areas: [
      "Damnhor",
      "Kafer EL dawar",
      "Rashed city",
      "Edco",
      "Abo EL matamer",
      "Abo Homous",
      "Wady El natroon",
      "Shobrkhet",
    ],
  },
  {
    name: "ElDakahlia",
    areas: [
      "metghmer",
      "Agia",
      "Bany abeed",
      "El Manzala",
      "Dakornous",
      "El Gamalya",
    ],
  },
  {
    name: "ElIsmailia",
    areas: [
      "Fayed City",
      "Cairo",
      "El Cantra shark",
      "El Cantra gharb",
      "Abo El saraser",
      "El Tael el kbber",
      "El kasaseen",
    ],
  },
  {
    name: "Minia",
    areas: [
      "Maghagha",
      "Bany Mazar",
      "Malwy",
      "Samalot",
      "Dear mwas",
      "El Adwa",
      "El fkrya",
    ],
  },
  {
    name: "ElSharqia",
    areas: [
      "Zakazek",
      "Belbes",
      "Hehaa",
      "Abo hmad",
      "Fakous",
      "Abo Kbeer",
      "El hosainya",
      "Saker",
    ],
  },
  {
    name: "Fayoum",
    areas: ["Tamya", "Snores", "Etsaa", "Abshway", "Yousef el sedyak"],
  },
  {
    name: "Gharbia",
    areas: [
      "Tanta",
      "Zefta",
      "El Mahala el kobra",
      "Kator",
      "Samanode",
      "Basyon",
      "El Zayat",
      "El santa",
    ],
  },
  {
    name: "Giza",
    areas: [
      "Badrashin City",
      "El-Saf City",
      "Atfeih",
      "El-ayat",
      "Osem",
      "Kerdasa",
    ],
  },
  { name: "Hurghada", areas: ["Sowma bay", "Makady bay", "El fander"] },
  {
    name: "PortSaid",
    areas: [
      "Abo Ramad",
      "Karlos",
      "Magawesh",
      "por fouad",
      "EL shrouk",
      "El mankh",
      "El dawhy",
      "EL Arab",
      "El zhoure",
    ],
  },
  { name: "North Coast", areas: ["Marina", "Kelo Batra", "Ageba"] },
  {
    name: "Menofia",
    areas: ["El-sadat", "shben El-kom", "Mnof", "Ashmon", "El shohdaa", "Tala"],
  },
  {
    name: "Matrouh",
    areas: [
      "Gowsna",
      "El Bagor",
      "Seewaa",
      "El Saloom",
      "Cedy Brany",
      "El Nagela",
      "El Dabaa",
      "El Alamen",
      "El Hmam",
    ],
  },
  {
    name: "Luxor",
    areas: ["Armant", "Asna", "El-Karnak", "El bayadya", "El tod", "El zenya"],
  },
  {
    name: "Sharm ElSheikh",
    areas: ["Taba", "Dahab", "Ras seder", "NwebaSant Katreen"],
  },
  {
    name: "Kafr ElSheik",
    areas: ["Desook", "Baltem", "Bela", "El Reyaid", "Klean", "El hamol"],
  },
  {
    name: "Suez",
    areas: ["Abo rades", "Abo Zanyma", "Ataka", "El Arbaen", "El Ganayen"],
  },
  {
    name: "Sohag",
    areas: [
      "Akhmem",
      "El balyana",
      "El-Mragha",
      "Gerga",
      "Tema",
      "El Monshaa",
      "Saklta",
      "Tahta",
    ],
  },
  {
    name: "Qena",
    areas: [
      "Abo tesht",
      "Naga Hamady",
      "Deshna",
      "Elrfaf",
      "Nkada",
      "Kos",
      "El waf",
    ],
  },
];

function EditDoctor() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const history = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return history("/");
  }, [user, loading]);
  const { id } = useParams();

  const [firstName, setFirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [mobile, setMobile] = useState(0);
  const [drCategory, setSpec] = useState("");
  const [drCity, setCity] = useState("");
  const [drArea, setArea] = useState("");
  const [image, setImg] = useState(null);
  const [url, setUrl] = useState("");
  const [addr, setAddr] = useState("");
  const [fees, setFees] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() =>
    firebase
      .firestore()
      .collection("Doctor")
      .doc(id)
      .get()
      .then((res) => {
        console.log(res.data());
        setFirstname(res.data().firstName);
        setlastname(res.data().lastName);
        setMobile(res.data().mobile);
        setSpec(res.data().drCategory);
        setCity(res.data().drCity);
        setArea(res.data().drArea);
        setAddr(res.data().addr);
        setFees(res.data().fees);
        setTime(res.data().time);
      }),[]
  );
  const [{ city, area }, setData] = useState({
    city: "Alexandria",
    area: "",
  });
  const cities = citiesData.map((city) => (
    <option key={city.name} value={city.name}>
      {city.name}
    </option>
  ));
  const areas = citiesData
    .find((item) => item.name === city)
    ?.areas.map((area) => (
      <option key={area} value={area}>
        {area}
      </option>
    ));
  function handleCityChange(event) {
    setData((data) => ({ area: "", city: event.target.value }));
    setCity(event.target.value);
  }
  function handleAreaChange(event) {
    setData((data) => ({ ...data, area: event.target.value }));
    setArea(event.target.value);
  }
  const categories = [
    "Allergy and Immunology (Sensitivity and Immunity)",
    "Andrology and Male Infertility",
    "Audiology",
    "Cardiology and Thorcic Surgery (Heart / Chest)",
    "Cardiology and Vascular Disease (Heart)",
    "Chest and Respiratory",
    "Dentistry (Teeth)",
    "Dermatology (Skin)",
    "Diabetes and Endocrinology",
    "Diagnostic Radiology",
    "Dietician and Nutrition",
    "Ear, Nose and Throat",
    "Family medicine",
    "Gastroenterology and Endoscopy",
    "General Pracitce",
    "General Surgery",
    "Geriatrics (Old People Health)",
    "Gynaecology and Infertility",
    "Hematology",
    "Hepatology (Liver Doctor)",
  ];
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const form = (e) => {
    e.preventDefault();
    if (image.name) {
      firebase
        .storage()
        .ref(`images/${image.name}`)
        .put(image)
        .on(
          "state changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            firebase
              .storage()
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
                console.log("image downloaded");
                if (url !== "") {
                  firebase
                    .firestore()
                    .collection("Doctor")
                    .doc(id)
                    .update({
                      firstName,
                      lastName,
                      mobile,
                      drCategory,
                      drCity,
                      drArea,
                      url,
                      addr,
                      fees,
                      time,
                    })
                    .then((res) => {
                      console.log("updated done");
                      history("/doctor-list");
                    })
                    .catch((err) => console.log(err.code));
                }
              });
          }
        );
    }
  };
  return (
    <>
      <div className="container-fluid content">
        <div className="title">
          <h1>Add Doctor</h1>
        </div>
        <div className="areYouDoctorForm">
          <div className="container-fluid">
            <div className="sign">
              <form
                className="global"
                id="xyz"
                novalidate="novalidate"
                onSubmit={(e) => form(e)}
              >
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
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                        value={firstName}
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
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                        value={lastName}
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
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        value={mobile}
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
                        onChange={(e) => {
                          setSpec(e.target.value);
                        }}
                        value={drCategory}
                      >
                        {categories.map((x, y) => (
                          <option key={y}>{x}</option>
                        ))}
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
                        value={drCity}
                        onChange={handleCityChange}
                      >
                        {cities}
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
                        value={drArea}
                        onChange={handleAreaChange}
                      >
                        {areas}
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
                        type="file"
                        onChange={handleImg}
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
                        onChange={(e) => {
                          setFees(e.target.value);
                        }}
                        value={fees}

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
                        onChange={(e) => {
                          setAddr(e.target.value);
                        }}
                        value={addr}
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
                        type={"number"}
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                        value={time}

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
