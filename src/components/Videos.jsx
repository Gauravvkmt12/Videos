import React from "react";

function Videos() {
  return (
    <>
      <div className="video-section">
        <video className="full-width-video" controls>
          <source src="/image/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        {/* Red Dot and Live TV Section */}
        <div className="live-tv-section">
          <span className="red-dot"></span>
          <span className="live-tv-text">Live TV</span>
        </div>
        {/* Latest Video Section */}
        <div className="">
          <div className="section-header">
            <h2>Latest Videos</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="section-header">
            <h2>Category 1: Interview</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="section-header">
            <h2>Category 2: Travel</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="section-header">
            <h2>Category 3: Business</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="section-header">
            <h2>Category 4: Sports</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="section-header">
            <h2>Category 5: Marketing</h2>
            <a
              href="/view-all-categories"
              className="text-decoration-none fw-bold"
            >
              View All
            </a>
          </div>
          <div className="scroll-x">
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video controls>
                <source src="/image/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-bottom"></div>
    </>
  );
}

export default Videos;
