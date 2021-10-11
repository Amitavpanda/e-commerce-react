import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import jackets from '../../images/jackets.jpg';
import Sneakers from '../../images/sneakers.jpg';
import Hats from '../../images/hats.jpg';
import Men from '../../images/men.jpg';
import Women from '../../images/women.jpg';
class Directory extends React.Component{
    constructor(){
        super();
        
        this.state = {
            sections : [
                {
                    title: 'jackets',
                    imageUrl: jackets,
                    id: 1
                },
                {
                    title: 'Sneakers',
                    imageUrl: Sneakers,
                    id: 2
                },
                {
                    title: 'Hats',
                    imageUrl: Hats,
                    id: 3
                },
                {
                    title: 'Men',
                    imageUrl: Men,
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Women',
                    imageUrl: Women,
                    size: 'large',
                    id: 5
                }

            ]
        }

    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title,imageUrl,id,size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        );
    }
}

export default Directory;