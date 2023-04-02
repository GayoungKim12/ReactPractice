import React from "react";

export default function ProductsTable(props) {
  const filterItems = props.inStockOnly ? props.items.filter((item) => item.stocked) : props.items;

  return (
    <>
      <tr>
        <td style={{ fontWeight: "bold" }}>{props.category}</td>
      </tr>
      {filterItems.map((item, idx) => (
        <tr key={idx}>
          <td style={{ color: item.stocked ? "black" : "red" }}>
            {item.name}
          </td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  )
}