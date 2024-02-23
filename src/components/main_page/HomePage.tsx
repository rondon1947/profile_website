import React from 'react';

import './styles/HomePage.styles.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import HomePageContent from "./components/HomePageContent";
import BlogMain from "../projects/blog/BlogMain";

const HomePage = () => {
    const [renderNavBarOptionNumber, setRenderNavBarOptionNumber] = React.useState<number>(0);

    return (
        <div id={'homepage_container'}>
            <div>
                <NavBar setRenderNavBarOptionNumber={setRenderNavBarOptionNumber}/>
                {renderNavBarOptionNumber === 0 && <HomePageContent/>}
                {renderNavBarOptionNumber === 1 && <BlogMain/>}
                {renderNavBarOptionNumber === 2 && <div>Render Projects</div>}
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;