import React from 'react'
import { GiChefToque } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
function Author() {
    return (<>
        <ul className="author-detail">
            <li><GiChefToque className="mr-2" />Sigit Tunggul Waskito</li>
            <li>
                <p class="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li><span class="badge badge-pill badge-secondary">2021-04-09</span></li>
            <li>
                <BsFillHeartFill className="like-indicator" /> : 99
            </li>
        </ul>
        <hr />
    </>
    )
}

export default Author
