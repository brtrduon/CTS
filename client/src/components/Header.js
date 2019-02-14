import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link className='item' to='/'>Home</Link>
            <Link className='item' to='/create'>Create Item</Link>
        </div>
    )
}

export default Header