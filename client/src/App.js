import { useEffect, useState, useContext } from "react";
import axios from 'axios';

import "./App.css";

import ProductTable from './components/productTable';
import { GlobalContext } from './globalContext';

function App() {

  const contextValue = useContext(GlobalContext);

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [inputs, setInputs] = useState({});
  const [masterEntity, setEntity] = useState([]);
  const [masterProduct, setProduct] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    if (!inputs.productId) {
      axios.get(`http://localhost:3001/api/product/getAll?page=${pageNumber}`)
      .then(res => {
        if (res.data.success) {
          setNumberOfPages(res.data.data.totalPages);
          contextValue.setProducts(res.data.data.productPageResult);
        }
      })
    }
  }, [pageNumber, inputs]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/master-entities/getAll`)
      .then(res => {
        if (res.data.success) {
          console.log(res.data)
          setEntity(res.data.data);
        }
      });
    
    axios.get(`http://localhost:3001/api/master-product/getAll`)
      .then(res => {
        if (res.data.success) {
          setProduct(res.data.data);
        }
      });
  }, []);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputs.productId || !inputs.entitiesId) {
      return;
    }
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/product',
      data: inputs,
      headers: {
          'Content-Type': `application/json`,
      },
    }).then(res => {
      if (res.data.success) {
        setInputs({});
        event.target.reset();
        alert(res.data.message);
      }
    });
  }
  
  return (
    <div className="App">

      <div class="container">
        <h1> Product Form </h1>
        <form id="contact" onSubmit={handleSubmit}>
          <div class="line">
            <label>Product: </label>
            <select name="productId" id="productId" onChange={handleChange} required>
            <option value="">Please select a product</option>
            {masterProduct.map((product, idx) => (
              <option key={idx} value={product.id}>{product.name}</option>
            ))}
            </select>
          </div>
          <div class="line">
            <label>Entity: </label>
            <select name="entitiesId" id="entitiesId" onChange={handleChange} required>
            <option value="">Please select a entity</option>
            {masterEntity.map((entity, idx) => (
              <option key={idx} value={entity.id}>{entity.name}</option>
            ))}
            </select>
          </div>
          <div class="line">
            <input type="submit" name="submit" value="Submit" class="button" />
          </div>
        </form>
      </div>

      <ProductTable />

      <ul class="pagination modal-1">
        <li>
          <a href="#" class="prev" onClick={gotoPrevious}>&laquo;</a>
        </li>
        {pages.map((pageIndex) => (
          <li>
            <a href="#" class={(pageNumber == pageIndex) ? "active" : ''} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</a>
          </li>
        ))}
        <li>
          <a href="#" class="next" onClick={gotoNext}>&raquo;</a>
        </li>
      </ul>
    </div>
  );

}

export default App;
