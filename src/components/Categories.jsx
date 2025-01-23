import React from "react";
const Categories = () => {
  const categories = [
    { id: 1, name: "Food & Cooking", image: "/image/modern-woman-cooking.jpg" },
    { id: 2, name: "Fitness & Health", image: "/image/woman-with-weight-plate-exercising.jpg" },
    { id: 3, name: "Travel", image: "/image/travel.jpg" },
    { id: 4, name: "Education", image: "/image/education.jpg" },
    { id: 5, name: "Fashion & Beauty", image: "/image/fashion.jpg" },
  ];

  return (
    <div className="categories-container1">
      {/* Breadcrumb */}
      {/* <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <FaArrowLeft className="breadcrumb-icon" /> Categories
            </Link>
          </li>
        </ol>
      </nav> */}

      {/* Categories */}
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-component d-flex">
            <img
              src={category.image}
              alt={category.name}
              className="category-image-1"
            />
            <div className="category-details">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">
                Discover amazing content in {category.name}. Explore now!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="margin-bottom"></div>
    </div>
  );
};

export default Categories;
