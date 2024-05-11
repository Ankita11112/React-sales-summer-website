import React from "react";
import "./Styles.css";
import { MdOutlinePerson3 } from "react-icons/md";
import { WiDayRain } from "react-icons/wi";
import { GoBell } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoRows } from "react-icons/go";
import { GoProjectRoadmap } from "react-icons/go";
import { CiGrid42 } from "react-icons/ci";
import { PiDeviceTablet } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa6";
import { CiVoicemail } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import Grph from "./Grph";
import Feedss from "./Feedss";
import ProListing from "./ProListing";

const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-md-2 shadow mb-5 bg-white rounded">
            <div className="row">
              <div className="col-md-12 m1-imge p-4">
                <div className="imge">
                  <MdOutlinePerson3 />
                </div>
              </div>
            </div>
            <div className="row sbr">
              <div className=" col-md-12 stv w-100">
                <p className="mx-4 pt-2">Steave Rojar</p>
              </div>
            </div>
            <div className="row">
              <div className="container col-md-10">
                <div className="row">
                  <Link
                    to="/neww"
                    className="col-md-12 w-100 d-flex ab py-3 rounded-1"
                    style={{ background: "cyan" }}
                  >
                    <div className=" text-light col-md-2">
                      <WiDayRain />
                    </div>
                    <div className=" col-md-10 text-light">Dashboard</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <GoBell />
                    </div>
                    <div className=" col-md-10">Alert</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <MdOutlineWatchLater />
                    </div>
                    <div className=" col-md-10">Badges</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <GoRows />
                    </div>
                    <div className=" col-md-10">Buttons</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <GoProjectRoadmap />
                    </div>
                    <div className=" col-md-10">Cards</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <CiGrid42 />
                    </div>
                    <div className=" col-md-10">Grid</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <PiDeviceTablet />
                    </div>
                    <div className=" col-md-10">Table</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <FaWpforms />
                    </div>
                    <div className=" col-md-10">Forms</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <CiVoicemail />
                    </div>
                    <div className=" col-md-10">Breadcrumbs</div>
                  </Link>
                </div>
                <div className="row">
                  <Link to="/neww" className="col-md-12 w-100 d-flex ab py-3">
                    <div className="col-md-2">
                      <FaUserFriends />
                    </div>
                    <div className=" col-md-10">About</div>
                  </Link>
                </div>
                <div className="row">
                  <Link
                    to="/neww"
                    className="col-md-12 w-100 d-flex ab py-2 bg-danger rounded-1"
                  >
                    <div className=" col-md-12 text-center">Upgrade To Pro</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-5">
            <div className="row">
              <div className="col-md-7">
                <Grph />
              </div>
              <div className="col-md-5">
                <Feedss />
              </div>
            </div>
            <div className="row g-1">
              <div className="col-md-12 shadow p-3 mb-5 bg-white rounded">
                <ProListing/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow mb-2 bg-white rounded">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTce48TWuJAl2ow-vIXU_P0CqkkhqSxeenBBSXJTVGsqA&s" className="img-fluid" alt="" />
                  <div className="card-body">
                    <h4>This is Simple Blog</h4>
                    <h6>2 comments, 1 Like</h6>
                    <p>This is Wider Card with Supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary w-50">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card shadow mb-2 bg-white rounded">
                  <img src="https://t4.ftcdn.net/jpg/06/78/48/81/240_F_678488180_qXJ7XOizMXFFuN8rMZSn1Ve3BWRrBTWR.jpg" className="img-fluid" alt="" />
                  <div className="card-body">
                    <h4>Lets be Simple</h4>
                    <h6>2 comments, 1 Like</h6>
                    <p>This is Wider Card with Supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary w-50">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card shadow mb-2 bg-white rounded">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHaUD9x8RYWlAfvtPrG3XPRjWIWAeSCrZ7V7t6InEd_DYqmYn7KBpe_RkNl2ZvXSBEo8&usqp=CAU" className="img-fluid" alt="" />
                  <div className="card-body">
                    <h4>Don't Lamp Blog</h4>
                    <h6>2 comments, 1 Like</h6>
                    <p>This is Wider Card with Supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary w-50">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card shadow mb-2 bg-white rounded">
                  <img src="https://i.pinimg.com/originals/c7/7c/a4/c77ca48f5309c213a9a687f3970eda8d.jpg" className="img-fluid" alt="" />
                  <div className="card-body">
                    <h4>Simple is Beautiful</h4>
                    <h6>2 comments, 1 Like</h6>
                    <p>This is Wider Card with Supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary w-50">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
