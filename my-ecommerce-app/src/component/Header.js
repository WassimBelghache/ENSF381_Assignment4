import React from 'react';

function Header(){
    const header = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    return(
        <header>
            <div className="header" style={header}>
            <img style={{height: '55px'}} src='/images/logo.png' className='logo' alt="company logo" />
            <h1 style={{fontWeight: 'normal', fontSize: '18px'}}>Hoodhaven</h1>
            </div>
            <div className="navbar" style={header}>
                <a href='/'>Home</a>
                <a href='/Products'>Products</a>
                <a href='/Login'>Login</a>
            </div>
        </header>
    );};

export default Header;