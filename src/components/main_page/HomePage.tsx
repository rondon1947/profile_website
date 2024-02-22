import React from 'react';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePageContent from "./components/HomePageContent";
import BlogMain from "../projects/blog/BlogMain";

const HomePage = () => {
    const [renderNavBarOptionNumber, setRenderNavBarOptionNumber] = React.useState<number>(0);

    return (
        <div>
            <NavBar setRenderNavBarOptionNumber={setRenderNavBarOptionNumber}/>
            {renderNavBarOptionNumber === 0 && <HomePageContent/>}
            {renderNavBarOptionNumber === 1 && <BlogMain/>}
            {renderNavBarOptionNumber === 2 && <div>Render Projects</div>}
            <Footer/>
        </div>
    );
};

export default HomePage;