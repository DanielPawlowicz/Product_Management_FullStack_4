package com.Daniel.Product_Management_Backend.service;

import com.Daniel.Product_Management_Backend.model.Product;
import org.springframework.context.annotation.Bean;

import java.util.List;

public interface ProductService {

    public Product saveProduct(Product product);

    public List<Product> getAllProduct();

    public Product getProductById(Integer id);

    public String deleteProduct(Integer id);

    public Product editProduct(Product product,Integer id);

}
