import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "How Sustainable Energy is Shaping Tomorrow's Economy",
      description:
        "The global shift towards sustainable energy is not just about protecting the environment—it’s a transformative force shaping the future of our economy. From the rapid adoption of renewable energy sources like solar and wind to advancements in energy storage and green technologies, sustainable energy is driving innovation, creating jobs, and fostering economic resilience.",
      media: "/image/blog2.jpg",
      readTime: "2 min read",
    },
    {
      id: 2,
      title: "Understanding Cryptocurrency: Is it the Future of Finance?",
      description:
        "Cryptocurrency has emerged as a revolutionary force in the financial world, challenging traditional banking systems and reshaping the way we perceive money. Built on blockchain technology, cryptocurrencies like Bitcoin and Ethereum offer decentralization, transparency, and security, making them appealing to individuals and businesses alike.",
      media: "/image/blog3.jpg",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Mastering the Market: The Power of Trading",
      description:
        " Step into the fast-paced world of trading, where every decision counts. This image captures the essence of a trader's focus, with real-time market data and charts reflecting the dynamic nature of global finance. Through skillful analysis and a keen eye for trends, traders navigate the complexities of the stock market, striving to turn opportunities into success. A moment of concentration, as data-driven strategies unfold in the pursuit of financial growth.",
      media: "/image/research3.jpg",
      readTime: "1 min read",
    },
  ];

  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State to manage story transitions

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextStory(),
    onSwipedRight: () => handlePrevStory(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Handle story change with a delay for animations
  const handleStoryChange = (nextStory) => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setCurrentStory(nextStory);
      setIsTransitioning(false); // End transition
      setProgress(0); // Reset progress bar after the animation
    }, 500); // Delay to match the animation duration
  };

  const handleNextStory = () => {
    handleStoryChange((currentStory + 1) % stories.length);
  };

  const handlePrevStory = () => {
    handleStoryChange(
      currentStory === 0 ? stories.length - 1 : currentStory - 1
    );
  };

  // Progress bar logic
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextStory();
            return 0;
          }
          return prev + 10;
        });
      }, 1500);

      return () => clearInterval(timer);
    }
  }, [currentStory, isTransitioning]);

  return (
    <div className="stories-container" {...handlers}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <FaArrowLeft className="breadcrumb-icon" /> Stories
            </Link>
          </li>
        </ol>
      </nav>

      {/* Story Viewer */}
      <div className="story-viewer">
        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div
            className={`progress-bar ${
              isTransitioning ? "hidden" : ""
            }`}
            style={{ width: `${progress}%`, transition: "width 1.5s linear" }}
          ></div>
        </div>

        {/* Media Content */}
        <div
          className={`story-media ${
            isTransitioning ? "fade-out" : "fade-in"
          }`}
        >
          <img
            src={stories[currentStory].media}
            alt={stories[currentStory].title}
            className="media-content"
          />
        </div>

        {/* Title and Description */}
        <div className={`story-content ${isTransitioning ? "slide-out" : "slide-in"}`}>
          <div className="story-header d-flex justify-content-between align-items-center">
            <h2 className="text-white">{stories[currentStory].title}</h2>
            <a href="#"><FaShareAlt className="share-icon" /></a>
          </div>
          <p className="story-description">{stories[currentStory].description}</p>
          <p className="story-read-time">{stories[currentStory].readTime}</p>
        </div>
      </div>
    </div>
  );
};
export default Stories;