import React from "react";

export default function ProductDetailNutrition(props){
    const {nutrition} = props;
    return <>
        <div>
            <table className="table table-nutrition">
                <thead>
                    <tr>
                        <th>Nutrient</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Protein</td>
                        <td>{nutrition.protein}g</td>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>{nutrition.carbs}g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{nutrition.carbs}g</td>
                    </tr>
                    <tr>
                        <td>Salt</td>
                        <td>{nutrition.fat}g</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>;
}