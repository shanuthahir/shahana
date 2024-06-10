import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/pages/HomePage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Login from '../customer/components/Login'
import Signup from '../customer/components/Signup'


const CustomerRouter = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/p' element={<Product />}></Route>
                <Route path='/pd' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/os' element={<Order />}></Route>
                <Route path='/od' element={<OrderDetails/>}></Route>

            </Routes>
            <div>

            </div>

        </div>
    )
}

export default CustomerRouter