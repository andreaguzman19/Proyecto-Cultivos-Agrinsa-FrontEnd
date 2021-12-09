import React from 'react';
import NavBar from '../components/NavBar';

function Layout({ children }) {
    return (
        <div className="layout">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout;