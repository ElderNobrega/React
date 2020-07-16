import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './item-detail.style.css';

function ItemDetail(props) {
    console.log(props.match.params.di)
    return <div>Detail screen</div>
}


export default ItemDetail;