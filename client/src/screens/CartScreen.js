import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { addToCart } from '../actions/cartAction'

const CartScreen = ({ match, history, location }) => {

    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    // console.log(cartItems, 'GHB')

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandle = (id) => {
        console.log('remove')
    }

    return (
        <div>
            <Row>
                <Col md={8} >
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message>your cart is empty <Link to='/'>Go Back</Link> </Message>
                        ) : (
                            <ListGroup variant='lush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.product}> 
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>${item.price}</Col>
                                            <Col md={2}>
                                                <Form.Control as='select' value={qty} onChange = {(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                    {[...Array(item.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1} >{x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                            <Col md={2}>
                                                <Button
                                                    type='button'
                                                    variant='light'
                                                    onClick={() => removeFromCartHandle(item.product)}
                                                >
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}

export default CartScreen
