import React from "react";
import "./Display.css";

function Display({title, img, rating, des, actor}) {
    return (
        <li>
            <div className="m-box">
                <img src={img} alt="{title}" />
                <div >
                    <h1 className="tit">{title}</h1>
                    <h4 className="des">{des.slice(0,200)}...</h4>
                    <p className="rat">rating : {rating}</p>
                    <p className="act">배우 : {actor}</p>
                </div>
            </div>
        </li>
    )
}

export default Display;