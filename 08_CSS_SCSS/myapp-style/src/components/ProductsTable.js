import React from "react";
import * as S from "./ProductsTable.style";

export default function ProductsTable(props) {
  const filterItems = props.inStockOnly ? props.items.filter((item) => item.stocked) : props.items;

  return (
    <>
      <tr>
        <S.Category>{props.category}</S.Category>
      </tr>
      {filterItems.map((item, idx) => (
        <tr key={idx}>
          <S.ProductName stocked={item.stocked}>
            {item.name}
          </S.ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  )
}