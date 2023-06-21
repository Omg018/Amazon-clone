import React from 'react'
import "../css/Product.css"
import { useState, useEffect } from 'react';

function Product(props) {
    const imageList = ['https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (currentImageIndex < imageList.length) {
            const timer = setTimeout(() => {
                setCurrentImageIndex(currentImageIndex + 1);
            }, 1000); // Adjust the delay (in milliseconds) between each image

            return () => clearTimeout(timer);
        }
    }, [currentImageIndex, imageList.length]);



    return (
        <div>
            <div className="product">
                <div className="productinfo"><p className="info">Watch</p>
                    <p className="price">
                        <small>$</small>
                        <strong>11.9</strong>
                    </p>

                    <div className="rating">
                        <span>🌟</span>
                        <span>🌟</span>
                        <span>🌟</span>
                        <span>🌟</span>
                    </div>
                </div>

                <div className="product_img">
                    {currentImageIndex < imageList.length && (
                        <img src={imageList[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                    )}
                </div>
                <button className="addto">Add to cart</button>




            </div>

        </div>
    )
}

export default Product;