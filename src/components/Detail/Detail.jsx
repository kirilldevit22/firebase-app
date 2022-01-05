import React from "react";
import './style.css';
import image from '../../assets/icons/icon.png';


export default function Detail({title, description, icon}){

    return(
        <div className="detail__section">
            <div className="detail__section-icon">
                <img src={image} alt="" className="detail-icon" />
            </div>
            <div className="detail__section-info">
                <h3 className="detail__info-title">
                    {title}
                </h3>

                <p className="detail__info-description">
                    {description}
                </p>
            </div>
        </div>
    )
}