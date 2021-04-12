import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
function Rating() {
    return (<ul style={{marginBottom:'0'}}>
        <li>
            <div className="ratings">
                <BsStarFill className="rating" />
                <BsStarFill className="rating" />
                <BsStarFill className="rating" />
                <BsStarHalf className="rating" />
            </div>
        </li>
    </ul>
    )
}

export default Rating