import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <span className="cart-icon" role="img" aria-label="cart">🛒</span>
            <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;
