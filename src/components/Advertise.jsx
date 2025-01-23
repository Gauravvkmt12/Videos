import React, { useState } from "react";

const Advertise = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAd = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="py-3 my-2 advertise-container">
      <div className="container">
        <div className="row">
          <div className="col position-relative">
            {/* Advertisement Image */}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block card-img-flash rounded-3 overflow-hidden advertise-link"
            >
              <img
                src="/image/adv-3.png"
                alt="Advertisement"
                className="advertise-image w-100 rounded-3"
              />
            </a>

            {/* Close Button */}
            <button
              className="close-btn position-absolute top-0 end-0 m-2 btn btn-primary btn-sm"
              onClick={closeAd}
              title="Close Ad"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
