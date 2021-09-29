import React, {useContext} from "react";
import canvas from "./canvas";
import {SortingContext} from '../sortingSelector/dropDown';

function CanvasImage() {
    const   sortBy  = useContext(SortingContext);

    console.log('sortBy', sortBy);
    return (
        <img src={canvas(sortBy)} alt='canvasImage'></img>
    );
}

export default CanvasImage;