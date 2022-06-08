import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The Lean startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://http2.mlstatic.com/D_NQ_NP_739525-MLM27815709231_072018-O.webp" alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product