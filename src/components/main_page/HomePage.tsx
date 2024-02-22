import React from 'react';
import NavBar from "./components/NavBar";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <div>
                <h1>
                    {t('HomePage.heading')}
                </h1>
                <h2>
                    {t('HomePage.subheading')}
                </h2>
                <p>
                    {t('HomePage.about_me')}
                    <br />
                    Find me on:{' '}
                    <a href="https://github.com/rondon1947">
                        GitHub
                    </a>
                    ,{' '}
                    <a href="https://www.linkedin.com/in/rohannishant7/">
                        LinkedIn
                    </a>
                    {' '}and{' '}
                    <a href="https://twitter.com/rondon7_10">
                        Twitter
                    </a>
                </p>
                <div>
                    <a href="https://www.linkedin.com/in/rohannishant7/">
                        Hire Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;