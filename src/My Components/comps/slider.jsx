import React from 'react'
import '../css/slider.css';
import { useState } from 'react';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import Product from './Product'


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '<img className="slide-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg"/>',
        '<img className="slide-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Haircare-Herofader-PC._CB594539534_.jpg">',
        '<img className="slide-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/FirstKitchenPurchase/Water-bottles-Lunch-box-under499-3000x1200._CB603489819_.jpg" >',
        '<img className="slide-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg" >',
        '<img className="slide-image" src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" >'

    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };


    return (
        <div className='home'>
            <div className="slider">

                <KeyboardArrowLeftSharpIcon onClick={prevSlide} class="slider-button slider-button-prev" data-slide-direction="prev" />
                <div className="slide" id='slides-container'>
                    {slides.map((slideContent, index) => {
                        if (slideContent.startsWith('<') && slideContent.endsWith('>')) {
                            return (
                                <div
                                    key={index}
                                    className={`slide-item ${currentSlide === index ? 'active' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: slideContent }}
                                />
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className={`slide-item ${currentSlide === index ? 'active' : ''}`}
                                >
                                    {slideContent}
                                </div>
                            );
                        }
                    })}



                </div>
                <KeyboardArrowRightSharpIcon onClick={nextSlide} class="slider-button slider-button-next" data-slide-direction="next" />

                <div className="home_row_box">
                    <Product /><Product />

                </div>
                <div className="home_row_box">

                    <Product /><Product /> <Product />



                </div>
                <div className="home_row_box">
                    <div className="pc">_______++++______________________________________________________________________________________ ____________________________________________________________________________________________________________________________________________________________________________________________________
                    </div>




                </div>


            </div>



        </div>
    );
};

export default Slider;



