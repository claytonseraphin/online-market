import React from "react";

export default function ProductDetailStorage(props){
    const{storage} = props;
    return <>
        <div>
            <p>
                <strong>Storage instructions:</strong> {storage.storage}
            </p>
        </div>
    </>;
}