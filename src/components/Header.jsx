import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("All"); // Default filter
  const filters = ["All", "Podcasts", "Blogs on Bitcoin", "Crypto News"]; // Filter options

  const toggleSearch = () => {
    setIsSearchActive((prev) => {
      if (!prev) {
        setIsNotificationsOpen(false); // Close notifications if search is activated
      }
      return !prev;
    });
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen((prev) => {
      if (!prev) {
        setIsSearchActive(false); // Close search view if notifications are activated
      }
      return !prev;
    });
  };

  const handleFilterChange = (filter) => {
    setSearchFilter(filter);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          {/* Left: Logo */}
          <Link to="/" className="navbar-brand logo">
            <img src="/image/3tv-logo.jpg" alt="" className="logo" />
          </Link>

          {/* Right: Icons and Buttons */}
          <div className="d-flex align-items-center">
            

            {/* Notification Icon */}
            <div className="notification-container">
              <button
                className="icon-btn"
                onClick={toggleNotifications}
                title="Notifications"
              >
                <i className="fas fa-bell"></i>
                {/* Notification Badge */}
                <span className="notification-badge">5</span>
              </button>

              {/* Notification Dropdown */}
              {isNotificationsOpen && (
                <div className="notification-dropdown">
                  <ul>
                    <li>New Podcast Available</li>
                    <li>Crypto News Update</li>
                    <li>New Blog Post</li>
                    <li>Video Uploaded</li>
                    <li>New Comment on Podcast</li>
                  </ul>
                  <div className="dropdown-footer">
                    <button>Show All</button>
                    <button>Mark as Read</button>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/Stories" className="login-btn mx-1">
              Stories
            </Link>
            {/* Search Icon */}
            <button
              className="icon-btn search-btn"
              onClick={toggleSearch}
              title="Search"
            >
              <i className="fas fa-search"></i>
            </button>

            {/* Login Button */}
            <Link to="/login" className="login-btn">
              Login
            </Link>

            {/* Hamburger Icon */}
            <button
              className="icon-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
              title="Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Search View */}
      <div className={`search-view ${isSearchActive ? "active" : ""}`}>
        <div className="container search-container">
          {/* Search Input with Filter Dropdown */}
          <div className="search-input-group">
            <select
              className="search-filter"
              value={searchFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              {filters.map((filter, index) => (
                <option key={index} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="search-input"
              placeholder={`Search for ${searchFilter.toLowerCase()}...`}
            />
          </div>
        </div>
      </div>

      {/* Offcanvas START */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu">
	<div className="offcanvas-header justify-content-end bg-dark">
		<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>
	<div className="offcanvas-body bg-dark d-flex flex-column pt-0">
		<div>
			<img className="logo" src="/image/3tv-logo.jpg" alt="logo" style={{width:"100px",alignItems:"center"}}/>
			<p className="text-white">The next-generation blog, news, and magazine theme for you to start sharing your stories today! </p>
		
			<ul className="nav d-block flex-column my-4">
				<li className="nav-item h5 ">
					<Link className="nav-link text-white" to="/">Home</Link>
          </li>
				<li className="nav-item h5">
					<Link className="nav-link text-white" to="/Stories">Stories</Link>
				</li>
				<li className="nav-item h5">
					<Link className="nav-link text-white" to="/Login">Login</Link>
				</li>
				<li className="nav-item h5">
					<Link className="nav-link text-white" to="/Contact">Contact Us</Link>
				</li>
			</ul>
		
			<div className="bg-primary bg-opacity-10 p-4 mb-4 text-center w-100 rounded">
				<span className="text-white fw-bold">The 3TV</span>
				<h3 className="text-white fw-bold">Save on Premium Membership</h3>
				<p className="text-white">Get the insights report trusted by experts around the globe. Become a Member Today!</p>
				<Link href="#" className="btn btn-warning">View pricing plans</Link>
			</div>
		</div>
		<div className="mt-auto pb-3">
		
			<p className="text-white mb-2 fw-bold">New York, USA (HQ)</p>
			<address className="mb-0 text-white">750 Sing Sing Rd, Horseheads, NY, 14845</address>
			<p className="mb-2 text-white">Call: <a href="#" className="text-white"><u>469-537-2410</u> (Toll-free)</a> </p>
			<a href="#" className="d-block text-white">Customersupport@3tv.com</a>
		</div>
	</div>
</div>

    </>
  );
};

export default Header;
