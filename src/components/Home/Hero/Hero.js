import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="background">
            <div className="container">
            <div className="row pt-5 text-light">
                <div className="col-md-6">
                    <h2>A Personal Blog For Bonna Maa</h2>
                    <h4>You can write about anything that comes to your mind . </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae similique aperiam hic veritatis libero optio magnam eaque iusto quaerat.</p>
                    <button className="btn btn-outline-light">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;