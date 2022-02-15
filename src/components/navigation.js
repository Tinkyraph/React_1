import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="a-propos">
                à propos
            </NavLink>
        </div>
    );
};

export default navigation;