import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, fetchProducts } from '../../../redux/slices/ProductSlice';
import ProductCard from '../../shared/ProductCard/ProductCard';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    const {products, loading} = useSelector((state) => state.products);
    const addToShopCart = (product) => {
        dispatch(addToCart(product));

    }
    return (
        <div className='featured-products' style={{backgroundColor: '#E5E5E5'}}>
            <Container className="py-5">
                <div className="section-title">
                    <h2>Featured Products</h2>
                </div>
                <Row>
                    {loading ? <Spinner className='loading-spinner' animation="border" variant="info" /> :
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                            addToShopCart={addToShopCart}
                        ></ProductCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedProducts;