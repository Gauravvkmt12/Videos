import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function News() {
  return (
    <>
    
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <FaArrowLeft className="breadcrumb-icon" /> News
            </Link>
          </li>
        </ol>
      </nav>

      {/* News Section */}
      <div className="trending-news-section">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-6">
            {/* Card 1 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news1.jpg"
                    alt="Lifestyle"
                  />
                </div>
                <div className="col-8">
                  {/* <a
                    href="#"
                    className="badge bg-danger bg-opacity-10 text-danger mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold"></i>Business
                  </a> */}
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link fw-bold"
                    >
                     Avalanche Raises $250 mn Ahead of Avalanche9000 Launch
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news2.jpg"
                    alt="Sports"
                  />
                </div>
                <div className="col-8">
                  {/* <a
                    href="#"
                    className="badge bg-danger bg-opacity-10 text-danger mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold"></i>Business
                  </a> */}
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      Market Update 17th December 2024
                    </a>
                  </h4>
  
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-6">
            {/* Card 3 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news3.jpg"
                    alt="Business"
                  />
                </div>
                <div className="col-8">
                  {/* <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold"></i>Business
                  </a> */}
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                     Telegram Game TapSwap Sets Token Launch and Airdrop for January
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news4.jpg"
                    alt="Sports"
                  />
                </div>
                <div className="col-8">
                  {/* <a
                    href="#"
                    className="badge bg-info bg-opacity-10 text-info mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold"></i>Sports
                  </a> */}
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                     Altcoin Season: The Comeback of Established Coins
                    </a>
                  </h4>
  
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news5.jpg"
                    alt="Sports"
                  />
                </div>
                <div className="col-8">
                  {/* <a
                    href="#"
                    className="badge bg-info bg-opacity-10 text-info mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold"></i>Sports
                  </a> */}
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                    MOCA Coin Price Surges 370%, Animoca Reveals Huge Mocaverse Plan
                    </a>
                  </h4>
  
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="/image/news/news6.jpg"
                    alt="Sports"
                  />
                </div>
                <div className="col-8">
                  
                  <h4>
                    <a
                      href="#"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                     Bitcoin’s Record Surge to $106K Ignites Bold 2025 Predictions
                    </a>
                  </h4>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="margin-bottom"></div>
    </>
  );
}
export default News;