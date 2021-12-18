import React from 'react';
import FeaturedProducts from '../components/Home/FeaturedProducts/FeaturedProducts';
import TopBanner from '../components/Home/TopBanner/TopBanner';
import TrendingProducts from '../components/Home/TrendingProducts/TrendingProducts';
import UniqueProduct from '../components/Home/UniqueProduct/UniqueProduct';
import Footer from '../components/shared/Footer/Footer';
import MenuBar from '../components/shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <MenuBar/>
            <TopBanner/>
            <FeaturedProducts/>
            <UniqueProduct/>
            <TrendingProducts/>
            <Footer/>
        </div>
    );
};

export default Home;