import React from 'react';

import '../common/template/dependencies';
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';

export default props => {

    return(

        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <Routes></Routes>
            </div>
            <Footer></Footer>
        </div>

    )

}