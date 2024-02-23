import React from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";

import '../../../../styles/Genericstyles.css';
import {useTranslation} from "react-i18next";

const MadeInIndia = () => {
    const {t} = useTranslation();

    return (
        <div className={'align-items-center'}>
            <text className={'mr4'}>
                {t('Footer.made_with')}
            </text>
            <FavoriteIcon style={{color: 'red'}} fontSize={"inherit"}/>
            <text className={'ml4'}>
                {t('Footer.bharat')}
            </text>
        </div>
    );
};
export default MadeInIndia;