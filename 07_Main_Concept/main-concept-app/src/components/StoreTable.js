import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
  const { products, filter } = props

  const targetProducts = products.filter((data) => data.name.includes(filter.text))

  const filteredProducts = targetProducts.length === 0 ? products : targetProducts
  
  const result =  filteredProducts.reduce((acc, cur) => {
    /* if(!acc.hasOwnProperty(cur.category)) {
      acc[cur.category] = []
    }
    acc[cur.category].push(cur)
    return acc */

    if(acc.hasOwnProperty(cur.category)) {
      return { ...acc, [cur.category]: [...acc[cur.category], cur]}
    } else {
      return { ...acc, [cur.category]: [cur]}
    }
  },{})

  const categories = Object.keys(result)

  return (
    <table>
      <thead style={{ fontWeight: "bold" }}>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, idx) => {
          return <ProductsTable category={category} inStockOnly={filter.inStockOnly} items={result[category]} key={idx} />
        })}
      </tbody>
    </table>
  )
}