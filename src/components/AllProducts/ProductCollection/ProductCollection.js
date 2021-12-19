import React, { useEffect } from 'react';
import { Col, Form, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, fetchProducts } from '../../../redux/slices/ProductSlice';
import ProductCard from '../../shared/ProductCard/ProductCard';

const ProductCollection = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const { products, loading, cartList } = useSelector((state) => state.products)

    const addToShopCart = (product) => {
        // dispatch(addToCart(product));
        // const exists = cartList.find(pd => pd._id === product._id);
        // console.log(exists)
        // let newCart = [];
        // if (exists) {
        //     const rest = cartList.filter(pd => pd._id !== product._id);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, product];
        // }
        // else {
        //     // console.log(product)
        //     // product.quantity = "1";
        //     // Object.preventExtensions(product)
        //     newCart = [...cartList, product];
        // }
        // // setCart(newCart);
        // console.log(newCart)
        dispatch(addToCart(product));

    }
    return (
        <div>
            <Row>
                <Col md={6} sm={12}>
                    <div className="section-title">
                        <h2>Ecommerce Acceories & Fashion item</h2>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <Form>
                        <Form.Group as={Col} controlId="formGridState" className='d-flex align-items-center w-50'>
                            <Form.Label>Sort:   </Form.Label>
                            <Form.Select defaultValue="Popular">
                                <option>Popular</option>
                                <option>Relevant</option>
                                <option>Latest</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={3} sm={12}>
                    <div className="section-title">
                        <h2>Product Brand</h2>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Coaster Furniture" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Fusion Dot High Fashion" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Unique Furniture Restor" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="section-title">
                        <h2>Discount Offer</h2>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="20% Cashback" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="5% Cashback" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="25% Cashback" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="section-title">
                        <h2>Rating Item</h2>
                        <Form>
                            <Form.Group className="mb-2 d-flex" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className='pe-2' />
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={4}
                                    readonly>
                                </Rating>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className='pe-2' />
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={3}
                                    readonly>
                                </Rating>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className='pe-2' />
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={2}
                                    readonly>
                                </Rating>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className='pe-2' />
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={2}
                                    readonly>
                                </Rating>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="section-title">
                        <h2>Categories</h2>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Prestashop" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Magento" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="3dCart" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="section-title">
                        <h2>Price Filter</h2>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="$0.00 - $150.00" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="$150.00 - $350.00" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="$150.00 - $504.00" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="$450.00+" />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col md={9} sm={12}>
                    <Row>
                        {loading ? <Spinner className='loading-spinner' animation="border" variant="info" /> :
                            products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                addToShopCart={addToShopCart}
                            ></ProductCard>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ProductCollection;