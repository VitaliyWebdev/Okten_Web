import React from 'react';

import './styles/slider.css'






export default function Slider (){
    return (
        <div className="slider-box col-xl-10">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://i2.rozetka.ua/images/271/271576.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i2.rozetka.ua/images/271/271576.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i2.rozetka.ua/images/271/271576.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"> </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}