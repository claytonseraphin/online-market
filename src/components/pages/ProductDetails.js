import React, {useState, useEffect} from "react";
import useFetch from "../utility/useFetch.js";
import {useParams, useRouteMatch, NavLink, Switch, Route} from "react-router-dom";
import ProductDetailInfo from './ProductDetailInfo.js';
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage";



export default function ProductDetails(props){
    const [product, setProduct] = useState({});
    const {get} = useFetch("https://react-tutorial-demo.firebaseio.com/");
    const params = useParams();
    const id = params.id;
    const match = useRouteMatch();
    //const url = match.path;
    //console.log(url);
    useEffect(() => {
        get(`productinfo/id${id}.json`)
        .then(data => {
            console.log(data);
            setProduct(data);
        })
        .catch(error => console.log("Could not load product detail", error))
    }, []);

    return(
        <div className="product-details-layout">
            <div>
                <h2>{product.name}</h2>
                <img
                    src={product.image}
                    width="125"
                    height="125"
                    className="product-details-image"
                    alt={product.name}
                />
            </div>
            <div>
                <div className="tabs">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="tab-active" to={match.url}>
                                Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="tab-active" to={`${match.url}/nutrition`}>
                                Nutrition
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="tab-active" to={`${match.url}/storage`}>
                                Storage
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path={match.path}>
                        <ProductDetailInfo
                            onProductAdd={props.onProductAdd} 
                            info={product}
                        />
                    </Route>
                    <Route exact path={`${match.path}/nutrition`}>
                        <ProductDetailNutrition nutrition={product.nutrition}/>
                    </Route>
                    <Route exact path={`${match.path}/storage`}>
                        <ProductDetailStorage storage={product}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}