import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function Podcast() {
  return (
    <>
      <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none mx-3">
              <FaArrowLeft className="breadcrumb-icon" /> Home
            </Link>
          </li>
        </ol>
      </nav>
      <section className="pt-0 pt-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card border rounded-3 p-3 mb-4">
                <div className="row g-4">
                  <div className="col-md-5">
                    <div className="position-relative">
                      <img
                        className="rounded-3"
                        src="/image/podcast/31.jpg"
                        alt="Card image"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge text-bg-danger mb-2">
                        Episode 1
                      </a>
                      <span>
                        {" "}
                        <i className="bi bi-clock-fill"></i> 4hr 12min
                      </span>
                    </div>
                    <h4 className="card-title">
                      <a href="#" className="btn-link text-reset">
                        Everything I Know (so Far) on UI/UX Ep.01
                      </a>
                    </h4>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs me-2">
                        <img
                          className="avatar-img  rounded-circle"
                          src="/image/avatar/01.jpg"
                          alt="avatar"
                        />
                      </div>
                      <h6 className="mb-0">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Billy Vasquez
                        </a>
                      </h6>
                    </div>
                    <div className="d-xl-flex align-items-center justify-content-between mt-4">
                      <Link
                        to="/Play"
                        className="btn btn-sm btn-primary"
                        href="#"
                      >
                        Play Episode
                      </Link>
                      <ul className="list-unstyled d-flex gap-2 align-items-center">
                        <li className="h6 mb-0">Listen on:</li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/apple-podcasts.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/divider-icon.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/spotify.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/pocket.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/sound-cloud.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border rounded-3 p-3 mb-4">
                <div className="row g-4">
                  <div className="col-md-5">
                    <div className="position-relative">
                      <img
                        className="rounded-3"
                        src="/image/podcast/32.jpg"
                        alt="Card image"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge text-bg-danger mb-2">
                        Episode 2
                      </a>
                      <span>
                        {" "}
                        <i className="bi bi-clock-fill"></i> 5hr 05min
                      </span>
                    </div>
                    <h4 className="card-title">
                      <a href="#" className="btn-link text-reset">
                        Design Problems Animation Can Answer Ep.02
                      </a>
                    </h4>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs me-2">
                        <img
                          className="avatar-img  rounded-circle"
                          src="/image/avatar/02.jpg"
                          alt="avatar"
                        />
                      </div>
                      <h6 className="mb-0">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bryan Knight
                        </a>
                      </h6>
                    </div>
                    <div className="d-xl-flex align-items-center justify-content-between mt-4">
                      <Link
                        to="/Play"
                        className="btn btn-sm btn-primary"
                        href="#"
                      >
                        Play Episode
                      </Link>
                      <ul className="list-unstyled d-flex gap-2 align-items-center">
                        <li className="h6 mb-0">Listen on:</li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/apple-podcasts.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/spotify.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/sound-cloud.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border rounded-3 p-3 mb-4">
                <div className="row g-4">
                  <div className="col-md-5">
                    <div className="position-relative">
                      <img
                        className="rounded-3"
                        src="/image/podcast/33.jpg"
                        alt="Card image"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge text-bg-danger mb-2">
                        Episode 3
                      </a>
                      <span>
                        {" "}
                        <i className="bi bi-clock-fill"></i> 2hr 22min
                      </span>
                    </div>
                    <h4 className="card-title">
                      <a href="#" className="btn-link text-reset">
                        Your Only Challenge Is to Focus Ep.03
                      </a>
                    </h4>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs me-2">
                        <img
                          className="avatar-img  rounded-circle"
                          src="/image/avatar/03.jpg"
                          alt="avatar"
                        />
                      </div>
                      <h6 className="mb-0">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Amanda Reed
                        </a>
                      </h6>
                    </div>
                    <div className="d-xl-flex align-items-center justify-content-between mt-4">
                      <Link
                        to="/Play"
                        className="btn btn-sm btn-primary"
                        href="#"
                      >
                        Play Episode
                      </Link>
                      <ul className="list-unstyled d-flex gap-2 align-items-center">
                        <li className="h6 mb-0">Listen on:</li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/apple-podcasts.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/divider-icon.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/spotify.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/google-podcasts.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <img
                              className="h-20"
                              src="/image/icon/sound-cloud.svg"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Podcast;
