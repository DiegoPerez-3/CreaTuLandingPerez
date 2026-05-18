import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <p>¡El catálogo de productos estará disponible pronto!</p>
        </div>
    );
};

export default ItemListContainer;
