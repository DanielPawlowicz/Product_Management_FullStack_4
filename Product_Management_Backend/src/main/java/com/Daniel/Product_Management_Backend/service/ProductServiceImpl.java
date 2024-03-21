package com.Daniel.Product_Management_Backend.service;

import com.Daniel.Product_Management_Backend.model.Product;
import com.Daniel.Product_Management_Backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepo;

    @Override
    public Product saveProduct(Product product){
        return productRepo.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepo.findById(id).get();
    }

    @Override
    public void deleteProduct(Integer id) {
        Product product = productRepo.findById(id).get();

        if(product != null){
            productRepo.delete(product);
        }
    }
}
