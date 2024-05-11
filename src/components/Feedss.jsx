import React from "react";
import { GoBell } from "react-icons/go";
import { MdOutlinePerson3 } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

const Feedss = () => {
  return (
    <>
      <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md-12">
            <h5>Feeds</h5>
            <p>Widget you can use </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "blue",
                  }}
                >
                  <GoBell
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                  Cras justo odio
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "cyan",
                  }}
                >
                  <MdOutlinePerson3
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                  New User Registered
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "red",
                  }}
                >
                  <FaCarRear
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                  Server #1 overloaded
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>  
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "green",
                  }}
                >
                  <IoIosLock
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                New Order Recieved
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>  
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "darkgray",
                  }}
                >
                  <GoBell
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                Cras justo odio
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>  
            <div className="row mt-4">
                <div className="col-md-3">
                <button
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    background: "orange",
                  }}
                >
                  <FaCarRear
                    style={{
                      position: "relative",
                      right: "6px",
                      bottom: "2px",
                    }}
                  />
                </button>
                </div>
                <div className="col-md-6">
                <p>
                Cras justo odio
                </p>
                </div>
                <div className="col-md-3">
                <p style={{ color: "gray" }}>6 minute ago</p>
                </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedss;
