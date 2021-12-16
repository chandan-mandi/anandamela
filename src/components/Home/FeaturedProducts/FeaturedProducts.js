import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductCard from '../../shared/ProductCard/ProductCard';

const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.products);
    console.log(products)
    return (
        <div className='featured-products' style={{backgroundColor: '#E5E5E5'}}>
            <Container className="py-5">
                <div className="section-title">
                    <h2>Featured Products</h2>
                </div>
                <Row>
                    {
                        products.map(product => <ProductCard
                            key={product.id}
                            product={product}
                        ></ProductCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedProducts;