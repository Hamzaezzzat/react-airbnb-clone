import React from "react";
// import itemPhoto from "../images/profile.jpg";

let imgSrc = "../images/";
export default function Card({
    img,
    alt,
    status,
    rating,
    reviewCount,
    country,
    title,
    price,
}) {
    return (
        <div className="offersSection">
            <div className="itemContainer">
                <div className="oneItem">
                    <div className="itemImg">
                        <img
                            className="itemPhoto"
                            src={imgSrc + img}
                            alt={alt}
                        />
                        <div className="itemStatus">
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
                <div className="itemInfo">
                    <div>
                        ♥️ {rating}
                        <span>
                            ({reviewCount}) • {country}{" "}
                        </span>
                    </div>
                    <div>{title}</div>
                    <div>
                        <b>{price}</b> / person
                    </div>
                </div>
            </div>
        </div>
    );
}