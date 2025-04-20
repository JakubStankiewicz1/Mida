import React, { useState } from "react";
import "./menu.css";
import data from "../../assets/data.json";

const Menu = () => {
  const [category, setCategory] = useState("Dinner");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const categoryData = data[category] || {};
  const categories = Object.keys(data); // Get all category names from the data

  return (
    <div className="menu">
      <div className="menuContainer">
        {/* Top Part */}
        <div className="menuContainerTop">
          <div className="menuContainerTopContainer">
            <p className="menuContainerTopContainerText">Menu</p>
          </div>
          <div className="menuCategorySelector">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`menuCategoryButton ${
                  cat === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
                <div
                  className={`menuContainerSelectorHr ${
                    cat === category ? "active" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="menuContainerTopLine">
            <div className="menuContainerTopLineHr">
              <div className="menuContainerTopLineHrDiv" />
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="menuContainerMiddle">
          <div className="menuContainerMiddleContainer">
            {Object.keys(categoryData).map((sectionKey, index) => {
              if (sectionKey.startsWith("name")) {
                const sectionNumber = sectionKey.replace("name", "");
                const sectionName = categoryData[sectionKey];
                const productsKey = `products${sectionNumber}`;
                const products = categoryData[productsKey];

                return (
                  <div key={index} className="menuContainerMiddleContainerDiv">
                    <p className="menuContainerMiddleContainerDivTitle">
                      {sectionName}
                    </p>

                    {/* Products */}
                    <div className="menuContainerMiddleContainerDivProducts">
                      {products && products.length > 0 ? (
                        products.map((product, idx) => (
                          <React.Fragment key={idx} className="menuContainerMiddleContainerDivProductsReactFragment">
                            <div className="menuContainerMiddleContainerDivProductsList">
                              {/* Left Part */}
                              <div className="menuContainerMiddleContainerDivProductsListLeft">
                                <div className="menuContainerMiddleContainerDivProductsListLeftContainer">
                                  <p className="menuContainerMiddleContainerDivProductsListLeftContainerTextOne">
                                    {product.name}
                                  </p>
                                  <p className="menuContainerMiddleContainerDivProductsListLeftContainerTextTwo">
                                    {product.description}
                                  </p>
                                  {product.allergens.length > 0 && (
                                    <p className="menuContainerMiddleContainerDivProductsListLeftContainerTextThree">
                                      Allergens: {product.allergens.join(", ")}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Right Part */}
                              <div className="menuContainerMiddleContainerDivProductsListRight">
                                <div className="menuContainerMiddleContainerDivProductsListRightContainer">
                                  <p className="menuContainerMiddleContainerDivProductsListRightContainerText">
                                    ${product.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {idx < products.length - 1 && (
                              <hr className="menuProductDividerHrEle" />
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <p className="menuNoProducts">No products available.</p>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
