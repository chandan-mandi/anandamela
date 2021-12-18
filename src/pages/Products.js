import React from 'react';
import { Container } from 'react-bootstrap';
import ProductCollection from '../components/AllProducts/ProductCollection/ProductCollection';
import MenuBar from '../components/shared/Menubar/Menubar';

const Products = () => {
    return (
        <div className='all-products'>
            <MenuBar/>
            <Container>
                <ProductCollection/>
            </Container>
        </div>
    );
};

export default Products;