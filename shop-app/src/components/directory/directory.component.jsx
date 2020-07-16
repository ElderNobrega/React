import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.css';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'C-182',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg/1200px-Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg',
                id: 1
            },
            {
                title: 'B-58',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beechcraft_Baron_58.jpg',
                id: 2
            },
            {
                title: 'C-320',
                imageUrl: 'https://photos.flightaware.com/photos/retriever/af0629a90dae1c035f4726b29361efada82d8626',
                id: 3
            },
            {
                title: 'C-90',
                imageUrl: 'https://cdn.jetphotos.com/400/2/73513_1167696386.jpg',
                id: 4,
                size: 'large'
            },
            {
                title: 'CJ1',
                imageUrl: 'https://www.jetcraft.com/wp-content/uploads/2014/10/CJ1_Ext-JS.jpg',
                id: 5,
                size: 'large'
            },
        ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} id={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;