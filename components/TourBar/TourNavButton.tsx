import React from 'react'
import type { FunctionComponent } from 'react'
import UITheme from 'styled-components';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const NavButton = UITheme.button`

    display: block;
    //color: yellow;
    // border-radius: 50%;
    margin: 16px auto 16px auto;
    //text-align: center;
    //width: 100%;
    width: 24px;
    height: 24px;
    transition: all 0.2s ease-in-out, color 0.5s ease-in-out;
    &:hover {
        color: #696969;
    }

    // text-align:left;
    white-space: nowrap;
    overflow: hidden;
    // text-indent: -9999px;
    // font-size: 0px;

    // background: #112 no-repeat center;

    // TODO(odbol): change direction icons depending on screen orientation
    //background-image: url(/images/navigate_before-white-18dp.svg);
    // background-image: url(/images/keyboard_arrow_up-white-18dp.svg);
`
/*
const NavNextButton = UITheme(NavButton)`
// TODO(odbol): change direction icons depending on screen orientation
//background-image: url(/images/navigate_next-white-18dp.svg);
background-image: url(/images/keyboard_arrow_down-white-18dp.svg);
`
*/

const TourNavButton: FunctionComponent<{isForward: boolean, onClick: () => void}> =
    ({isForward, onClick }) => {
        // TODO(odbol): fix the typescript error in https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 
        // so we can pass a "direction" prop instead.
        if (isForward) {
            return (
                <NavButton>
                    <PlayCircleFilledIcon style={{ transform: "rotate(90deg)" }} onClick={onClick} />
                </NavButton>
            )
        } else {
            return (
                <NavButton>
                    <PlayCircleFilledIcon onClick={onClick} style={{ transform: "rotate(-90deg)" }}/>
                </NavButton>
            )
        }
}

export default TourNavButton

