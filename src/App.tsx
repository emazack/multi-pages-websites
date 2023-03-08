import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Locations from './pages/locations/Locations';
import AppDesign from './pages/product/AppDesign';
import GraphicDesign from './pages/product/GraphicDesign';
import WebDesign from './pages/product/WebDesign';

export default function App() {

    //const PageAdmin = lazy(() => import('./features/PageAdmin'));
    //const PageContacts = lazy(() => import('./features/PageContacts'));
    //come implementare
    // <Route path="/admin" element={
    //     <React.Suspense fallback={<>...</>}>
    //         <PageAdmin />
    //     </React.Suspense>
    // } />

    return (
        <BrowserRouter>
            <Header />
            <main className='main-content'>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/app-design" element={<AppDesign />} />
                    <Route path="/graphic-design" element={<GraphicDesign />} />
                    <Route path="/web-design" element={<WebDesign />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}