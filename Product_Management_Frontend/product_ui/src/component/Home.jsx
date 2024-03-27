import React from 'react'
import productService from '../service/productService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productService
    .getAllProduct()
    .then((res) => {
      // console.log(res.data);
      setProductList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          <div className="col-md-12">
            <div className='card'>

              <div className="card-header fs-3 text-center">
                All Product List
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    
                        <tr>
                          <th scope="col">Sl No.</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                    
                  </thead>
                  <tbody>
                    {
                      productList.map((p, num) => (
                        <tr>
                          <td>{num+1}</td>
                          <td>{p.productName}</td>
                          <td>{p.description}</td>
                          <td>{p.price}</td>
                          <td>{p.status}</td>
                          <td>
                            <Link tp="" className='btn btn-sm btn-primary'>Edit</Link>
                            <Link tp="" className='btn btn-sm btn-danger ms-1'>Delete</Link>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home