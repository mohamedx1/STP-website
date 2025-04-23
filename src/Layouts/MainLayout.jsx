import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/common/header/NavBar';
import Footer from '../components/common/footer/Footer';

export default function MainLayout () {
    return (
        <div className='flex flex-col justify-between'>
            <header>
                <NavBar />
            </header>
            <section className=''>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
