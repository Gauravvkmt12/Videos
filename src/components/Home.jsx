import React from "react";
import Advertise from "./Advertise";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container-fluid video-section">
        <div className="video-header d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold">Latest Videos</h4>
          <Link to="/Video" className="text-decoration-none text-primary">
            View All
          </Link>
        </div>

        <div>
          <div className="video-item d-flex align-items-center mb-3">
            <div className="video-thumbnail">
              <video width="300" height="300" controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-details ms-3">
              <h5 className="mb-1">Video Title</h5>
              <p className="text-muted mb-1">15 min</p>
            </div>
            <div className="ms-auto video-actions">
              <button className="btn btn-outline-secondary">
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </div>
            <div className="video-time">
              <p className="text-muted">1 hr ago</p>
            </div>
          </div>

          <div className="video-item d-flex align-items-center mb-3">
            <div className="video-thumbnail">
              <video width="300" height="300" controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-details ms-3">
              <h5 className="mb-1">Video Title 2</h5>
              <p className="text-muted mb-1">18 min</p>
            </div>
            <div className="ms-auto video-actions">
              <button className="btn btn-outline-secondary">
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </div>
            <div className="video-time">
              <p className="text-muted">2 hr ago</p>
            </div>
          </div>

          <div className="video-item d-flex align-items-center mb-3">
            <div className="video-thumbnail">
              <video width="300" height="300" controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-details ms-3">
              <h5 className="mb-1">Video Title 3</h5>
              <p className="text-muted mb-1">25 min</p>
            </div>
            <div className="ms-auto video-actions">
              <button className="btn btn-outline-secondary">
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </div>
            <div className="video-time">
              <p className="text-muted">5 hr ago</p>
            </div>
          </div>
        </div>
      </div>

      <Advertise />

      <div className="container-fluid news-section">
        <div className="news-header">
          <h4>Latest News</h4>
          <Link
            to="/News"
            className="text-decoration-none text-primary fw-bold"
          >
            View all
          </Link>
        </div>
        <div className="news-container">
          <div className="card">
            <img src="/image/news/news1.jpg" alt="News 1" />
            <div className="card-body">
              <p className="card-text fw-bold">
                Avalanche Raises $250 mn Ahead of Avalanche9000 Launch
              </p>
              <div className="row">
                <div className="d-flex align-items-center">
                  <img
                    src="/image/admin.png"
                    alt="Author"
                    className=""
                    style={{ width: "40px", borderRadius: "50%" }}
                  />
                  <div>
                    <p className="mb-0 text-muted mx-2">
                      By{" "}
                      <a href="#" className="text-decoration-none fw-bold">
                        Admin
                      </a>
                    </p>
                    <small className="mx-2">December 11, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/image/news/news2.jpg" alt="News 2" />
            <div className="card-body">
              <p className="card-text fw-bold">
                Another Headline for Latest News
              </p>
              <div className="row">
                <div className="d-flex align-items-center">
                  <img
                    src="/image/admin.png"
                    alt="Author"
                    className=""
                    style={{ width: "40px", borderRadius: "50%" }}
                  />
                  <div>
                    <p className="mb-0 text-muted mx-2">
                      By{" "}
                      <a href="#" className="text-decoration-none fw-bold">
                        Admin
                      </a>
                    </p>
                    <small className="mx-2">December 11, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/image/news/news3.jpg" alt="News 3" />
            <div className="card-body">
              <p className="card-text fw-bold">More News in This Section</p>
              <div className="row">
                <div className="d-flex align-items-center">
                  <img
                    src="/image/admin.png"
                    alt="Author"
                    className=""
                    style={{ width: "40px", borderRadius: "50%" }}
                  />
                  <div>
                    <p className="mb-0 text-muted mx-2">
                      By{" "}
                      <a href="#" className="text-decoration-none fw-bold">
                        Admin
                      </a>
                    </p>
                    <small className="mx-2">December 11, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/image/news/news4.jpg" alt="News 3" />
            <div className="card-body">
              <p className="card-text fw-bold">
                Altcoin Season: The Comeback of Established Coins
              </p>
              <div className="row">
                <div className="d-flex align-items-center">
                  <img
                    src="/image/admin.png"
                    alt="Author"
                    className=""
                    style={{ width: "40px", borderRadius: "50%" }}
                  />
                  <div>
                    <p className="mb-0 text-muted mx-2">
                      By{" "}
                      <a href="#" className="text-decoration-none fw-bold">
                        Admin
                      </a>
                    </p>
                    <small className="mx-2">December 11, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-4">
        <div className="row mb-3">
          <div className="col">
            <h4>Latest Podcast</h4>
          </div>
          <div className="col text-end">
            <Link
              to="/Podcast"
              className="text-decoration-none text-primary fw-bold"
            >
              View all
            </Link>
          </div>
        </div>

        <div className="row gx-3 gy-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="podcast-card">
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="podcast-details">
                <h5 className="podcast-title">Latest Podcast Title</h5>
                <p className="podcast-duration">Duration: 25 minutes</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="podcast-card">
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="podcast-details">
                <h5 className="podcast-title">Podcast on Web Design</h5>
                <p className="podcast-duration">Duration: 18 minutes</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="podcast-card">
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="podcast-details">
                <h5 className="podcast-title">Tips for Developers</h5>
                <p className="podcast-duration">Duration: 22 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="ms-3 text-black">Latest Blogs</h2>
          <a href="#" className="me-3 text-decoration-none text-primar fw-bold">
            View All
          </a>
        </div>
        <div className="Blog-container">
          {/* Blog Card 1 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="image/blogs/14.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      <div
                        className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                        title="8.5 rating"
                      >
                        8.5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Skills that you can learn from business
                  </a>
                </h4>
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      BY ADMIN
                    </a>
                  </li>
                  <li className="nav-item">Aug 15, 2022</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="image/blogs/09.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      <div
                        className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                        title="9.0 rating"
                      >
                        9.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Mastering time management techniques
                  </a>
                </h4>
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      BY ADMIN
                    </a>
                  </li>
                  <li className="nav-item">Aug 20, 2022</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="image/blogs/08.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      <div
                        className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                        title="8.8 rating"
                      >
                        8.8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Innovative approaches in business growth
                  </a>
                </h4>
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      BY ADMIN
                    </a>
                  </li>
                  <li className="nav-item">Aug 25, 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advertise />

      <div className="container-fluid bg-light py-4">
        {/* Header Section */}
        <div className="row mb-3">
          <div className="col">
            <h4>Latest Research Reports</h4>
          </div>
          <div className="col text-end">
            <Link
              href="#"
              className="text-decoration-none text-primary fw-bold"
            >
              View all
            </Link>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card w-100 mb-2">
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="/image/blogs/29.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Marketing
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Five unbelievable facts about money.
                  </a>
                </h2>
                <p>
                  I beast third void blessed fruit Saw fourth may lesser fly
                  fill upon subdue open place abundantly sea herb winged day so
                  was divide.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card w-100 mb-2">
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="/image/blogs/28.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Travel
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    8 initial problem of startups and their solution
                  </a>
                </h2>
                <p>
                  One is replenish bearing rule wherein sixth may Shall is had
                  seasons you sixth made shall him upon he very give you'll fowl
                  Life open.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card w-100 mb-2">
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="/image/blogs/26.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Travel
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    8 initial problem of startups and their solution
                  </a>
                </h2>
                <p>
                  One is replenish bearing rule wherein sixth may Shall is had
                  seasons you sixth made shall him upon he very give you'll fowl
                  Life open.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advertise />

      <div className="container-fluid py-4">
        {/* Header Section */}
        <div className="row mb-3">
          <div className="col d-flex justify-content-between">
            <h4>Categories</h4>
            <Link
              to="/Categories"
              className="text-decoration-none text-primary fw-bold"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Category Cards */}
        <div className="categories-container">
          {/* Category Item 1 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-overlay-bottom card-img-scale mb-4">
              <img
                className="card-img"
                src="/image/blogs/01.jpg"
                alt="Travel"
              />
              <div className="card-img-overlay d-flex px-3 px-sm-5">
                <h5 className="mt-auto mx-auto">
                  <a
                    href="#"
                    className="stretched-link btn-link fw-bold text-white"
                  >
                    Travel
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* Category Item 2 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-overlay-bottom card-img-scale mb-4">
              <img
                className="card-img"
                src="/image/blogs/02.jpg"
                alt="Business"
              />
              <div className="card-img-overlay d-flex px-3 px-sm-5">
                <h5 className="mt-auto mx-auto">
                  <a
                    href="#"
                    className="stretched-link btn-link fw-bold text-white"
                  >
                    Business
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* Category Item 3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-overlay-bottom card-img-scale mb-4">
              <img
                className="card-img"
                src="/image/blogs/03.jpg"
                alt="Marketing"
              />
              <div className="card-img-overlay d-flex px-3 px-sm-5">
                <h5 className="mt-auto mx-auto">
                  <a
                    href="#"
                    className="stretched-link btn-link fw-bold text-white"
                  >
                    Marketing
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* Category Item 4 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-overlay-bottom card-img-scale mb-4">
              <img
                className="card-img"
                src="/image/blogs/04.jpg"
                alt="Photography"
              />
              <div className="card-img-overlay d-flex px-3 px-sm-5">
                <h5 className="mt-auto mx-auto">
                  <a
                    href="#"
                    className="stretched-link btn-link fw-bold text-white"
                  >
                    Photography
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* Category Item 5 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-overlay-bottom card-img-scale mb-4">
              <img
                className="card-img"
                src="/image/blogs/05.jpg"
                alt="Sports"
              />
              <div className="card-img-overlay d-flex px-3 px-sm-5">
                <h5 className="mt-auto mx-auto">
                  <a
                    href="#"
                    className="stretched-link btn-link fw-bold text-white"
                  >
                    Sports
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-bottom"></div>
    </>
  );
}

export default Home;
