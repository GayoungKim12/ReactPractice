import React from "react";

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  const handleInStockOnly = (e) => {
    props.updateFilter(e.target.name, e.target.checked)
  }

  const handleText = (e) => {
    props.updateFilter(e.target.name, e.target.value)
  }

  return (
    <>
      <input 
        placeholder="Search..." 
        name="text" 
        value={text} 
        onChange={handleText} 
      />
      <div>
        <input 
          type="checkbox" 
          id="stock" 
          name="inStockOnly" 
          checked={inStockOnly} 
          onChange={handleInStockOnly} 
        />
        <label htmlFor="stock">Only show Products in stock</label>
      </div>
    </>    
  )
}