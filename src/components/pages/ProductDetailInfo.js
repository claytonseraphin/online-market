import React from "react";
import Button from "../ui-kits/Button.js";

export default function ProductDetailInfo(props){
    const {info, onProductAdd} = props;
    return <>
        <div>
            <p>
                {info.description} sold at <strong>${info.price}</strong> per piece.
            </p>
            <Button onClick={() => onProductAdd(info)}>${info.price}</Button>
        </div>
    </>;
}