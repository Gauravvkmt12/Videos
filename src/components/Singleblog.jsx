import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft} from "react-icons/fa";
function Singleblog() {
  return (
    <>
      <div className="container-fluid ">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/Blogs" className="text-decoration-none">
              <FaArrowLeft className="breadcrumb-icon" /> Blogs
            </Link>
          </li>
        </ol>
      </nav>
        {/* Blog Metadata */}
        <div className="blog-meta d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img
              src="/image/admin.png"
              alt="Author"
              className="rounded-circle img-fluid admin-image me-2"
            />
            <div>
              <p className="mb-0 text-muted">
                By <a href="#" className="text-decoration-none fw-bold">Admin</a>
              </p>
              <small className="">December 11, 2024</small>
            </div>
          </div>
        </div>

        <div className="blog-meta-stats d-flex justify-content-between mt-2">
          <p className="mb-0">
            <i className="bi bi-clock me-1"></i>2 Mins Read
          </p>
          <p className="mb-0">
            <i className="bi bi-eye me-1"></i>32 Views
          </p>
        </div>

        {/* Share Icons */}
        <div className="blog-share-icons mt-3 d-flex">
          <p className="mb-2">Share:</p>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="text-decoration-none">
              <i className="bi bi-facebook text-primary"></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-twitter-x text-dark"></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-linkedin text-primary"></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-whatsapp text-success"></i>
            </a>
          </div>
        </div>

        {/* Blog Image */}
        <div className="card">
        <div className="card-fold position-relative">
						<img className="card-img" src="/image/blogs/blog4.jpg" alt="Card image"/>
					</div>
        </div>
        {/* Blog Content */}
        <div className="mt-5">
          <h1 className="fw-bold">An Insight Into Tokenization of Real World Assets</h1>
          <p className="fw-bold">By Kapil Rajyaguru</p>

          <p>
            The <span className="fw-bold text-primary">cryptocurrency</span> industry has been booming despite discussions over the future of trading financial assets and the possibility of on-chain placement. Big financial firms like BlackRock are starting to realize how transformative blockchain technology may be. The issue of what comes next is raised by this. And because of their potential, real-world assets (RWAs) have undoubtedly become a frontier in this discussion.
          </p>

          <p>
            Without a question, the tokenization of physical assets is changing the landscape of conventional banking by fusing blockchain technology with physical assets. By redesigning existing assets and putting them on the <span className="fw-bold text-primary">blockchain</span> as digital tokens, this junction has already produced a growing ecosystem.
          </p>

          <p>
            The extension of this subsection demonstrates the growing use of asset tokenization and its potential to revolutionize financial markets.
          </p>

          <p>
            By 2030, tokenizing illiquid assets may create a market worth up to $4 trillion, according to some economists. This audacious estimate demonstrates the magnitude of the opportunity and the potential of <span className="fw-bold text-primary">blockchain technology</span> to alleviate inefficiencies within the conventional banking sector.
          </p>

          <p>
            A number of variables are driving the real-world asset market’s explosive growth and paving the way for a paradigm change in the trading and even management of financial assets.
          </p>
        </div>
      </div>
      <div className="margin-bottom"></div>
    </>
  );
}

export default Singleblog;
