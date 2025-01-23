import React from "react";
import { FaShareAlt } from "react-icons/fa"; // You can install react-icons for this

function Play() {
  const latestVideos = [
    { id: 1, title: "10 Tips for Solo Travel", thumbnail: "/image/video.mp4" },
    { id: 2, title: "Packing Essentials for a Trip", thumbnail: "/image/video.mp4" },
    { id: 3, title: "Best Travel Destinations 2025", thumbnail: "/image/video.mp4" },
    { id: 4, title: "How to Budget for Your Next Trip", thumbnail: "/image/video.mp4" },
    { id: 5, title: "Travel Hacks You Should Know", thumbnail: "/image/video.mp4" },
  ];

  return (
    <>
      {/* Main Video */}
      <div className="col-12 mb-4">
        <div className="video-container" style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
          <video
            controls
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <source src="/image/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Main Video Title */}
        <div
          className="video-title mt-3"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#222",
            letterSpacing: "0.5px",
            lineHeight: "1.4",
            textTransform: "capitalize", // Added to make the title look more attractive
          }}
        >
          7 Common Mistakes Everyone Makes While Traveling
        </div>
      </div>

      {/* Latest Videos Section */}
      <div className="latest-videos mt-5">
        <h4
          style={{
            fontSize: "1.3rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "15px",
            textAlign: "left",
            marginLeft: "8px",
          }}
        >
          Latest Videos
        </h4>
        <div className="row">
          {latestVideos.map((video) => (
            <div className="col-12 mb-4" key={video.id}>
              <div
                className="video-thumbnail"
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <video
                  controls
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <source src={video.thumbnail} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Video Title for Latest Videos */}
              <div
                className="video-title mt-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#222",
                  letterSpacing: "0.5px",
                  textAlign: "left",
                  marginLeft: "8px",
                  textTransform: "capitalize", // Added to make the title look more attractive
                  lineHeight: "1.4", // Added for line spacing between text
                }}
              >
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Play;
