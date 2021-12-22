import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext';

const ProductTable = () => {
  const contextValue = useContext(GlobalContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Code</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Entities Count</th>
          </tr>
        </thead>
        <tbody>
          {contextValue.products.map((product, idx) => (
            <tr key={idx}>
              <td>{product.id}</td>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.masterProduct.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;