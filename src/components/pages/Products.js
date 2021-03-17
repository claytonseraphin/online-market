import React, {useState, useEffect} from "react";
import useFetch from "../utility/useFetch.js";
import Loader from "../utility/Loader.js";
import Product from "../utility/Product.js";


export default function Products(props){
    const [products, setProducts] = useState([]);
    const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/");
    useEffect(() => {
      get("supermarket.json")
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.log("Could not load products", error));
    }, []);

    return(
        <div className="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="products-grid">
                {loading && <Loader />}
                {products.map((product) => {
                    return(
                        <Product
                            key={product.id}
                            details={product}
                            onProductAdd={props.onProductAdd}
                            onProductDelete={props.onProductDelete}
                            cart={props.cart}
                        />
                    )
                })}
            </div>
        </div>
    );
}