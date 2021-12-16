import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MenuBar from '../components/shared/Menubar/Menubar';
import ProductCard from '../components/shared/ProductCard/ProductCard';

const Cart = () => {
    const products = useSelector((state) => state.products.cartList);
    return (
        <div>
            <MenuBar/>
            <Container className="py-5">
                <div className="section-title">
                    <h2>Total Items: {products.length}</h2>
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

export default Cart;