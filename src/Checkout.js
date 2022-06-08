import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (

    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>the subtotal will go there</h2>
      </div>
    </div>

  )
}

export default Checkout