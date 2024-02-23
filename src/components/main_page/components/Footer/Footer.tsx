import React from 'react';

import '../../../../styles/Genericstyles.css';
import '../../styles/Footer.styles.css';
import LanguageSelector from "./LanguageSelector";
import MadeInIndia from "./MadeInIndia";
import SourceCode from "./SourceCode";

const Footer = () => {
    return (
        <div id={'ftr_container'}>
            <LanguageSelector/>
            <MadeInIndia/>
            <SourceCode/>
        </div>
    );
};
export default Footer;