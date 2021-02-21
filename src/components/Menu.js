import React from 'react';
import { Link } from "react-router-dom";

import {ReactComponent as HomeIcon} from './HomeIcon.svg';

export default function Menu() {
    return (
        <div className="menuOuterContainer">
            <div className="menuContainer">
                <Link to='/' style={{height: "3vw"}}>
                    <HomeIcon id="menuIcon" style={{height: "3vw"}} />
                </Link>
            </div>
        </div>
    )
}
