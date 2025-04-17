import React, { useState } from 'react';
import './menu.css';
import data from '../../assets/data.json';

const renderProducts = (products, handleProductClick) => {
  if (!products || products.length === 0) {
    return <p className="menuNoProducts">No products available.</p>;
  }

  return products.map((product, index) => (
    <div key={index} className="menuProduct" onClick={() => handleProductClick(product)}>
      {/* Left Part */}
      <div className="menuProductLeft">
        <p className="menuProductName">{product.name}</p>
      </div>
      {/* Right Part */}
      <div className="menuProductRight">
        <p className="menuProductPrice">${product.price}</p>
      </div>
    </div>
  ));
};

const Menu = () => {
  const [category, setCategory] = useState('Dinner'); // Default category
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedProduct(null); // Reset selected product when category changes
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set selected product on click
  };

  const categoryData = data[category] || {}; // Safely fetch category data

  return (
    <div className="menu">
      <div className="menuContainer">
        {/* Top Part */}
        <div className="menuContainerTop">
          <div className="menuContainerTopContainer">
            <p className="menuContainerTopContainerText">Menu</p>
          </div>
          <div className="menuCategorySelector">
          </div>
        </div>

        {/* Middle Part */}
        <div className="menuContainerMiddle">
          <div className="menuContainerMiddleContainer">
           

            {Object.keys(categoryData).map((sectionKey, index) => {
              if (sectionKey.startsWith('name')) {
                const sectionNumber = sectionKey.replace('name', '');
                const sectionName = categoryData[sectionKey];
                const productsKey = `products${sectionNumber}`;
                const products = categoryData[productsKey];

                return (
                  <div key={index} className="menuContainerMiddleContainerDiv">
                    
                    <p className="menuContainerMiddleContainerDivTitle">{sectionName}</p>

                    {/* Products */}
                    <div className="menuContainerMiddleContainerDivProducts">
                      {products && products.length > 0 ? (
                        products.map((product, idx) => (
                          <React.Fragment key={idx}>
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
                                      Allergens: {product.allergens.join(', ')}
                                    </p>
                                  )}
                                  {product.optional.length > 0 && (
                                    <p className="menuContainerMiddleContainerDivProductsListLeftContainerTextFour">
                                      Optional: {product.optional.map(option => `${option[0]} - $${option[1]}`).join(', ')}
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
                            {idx < products.length - 1 && <hr className="menuProductDivider" />}
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