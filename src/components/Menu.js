import React from 'react';

import {ReactComponent as HomeIcon} from './HomeIcon.svg';

export default function Menu() {
    return (
        <div className="menuOuterContainer">
            <div className="menuContainer">
                <a href="/" style={{height: "3vw"}}>
                    <HomeIcon id="menuIcon" style={{height: "3vw"}} />
                </a>
            </div>
        </div>
    )
}
