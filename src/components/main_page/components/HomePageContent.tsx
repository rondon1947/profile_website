import React from 'react';
import {githubURL, linkedInURL, twitterURL} from "../constants/HomePage.constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import {useTranslation} from "react-i18next";

const HomePageContent = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h1>
                {t('HomePage.heading')}
            </h1>
            <h2>
                {t('HomePage.subheading')}
            </h2>
            <p>
                {t('HomePage.about_me')}
                <br/>
                {t('HomePage.find_me')}
                <a style={{color: 'initial', textDecoration: 'none'}} href={githubURL} target="_blank"
                   rel="noopener noreferrer">
                    <GitHubIcon fontSize={'small'}/>
                </a>
                ,{' '}
                <a style={{color: 'initial', textDecoration: 'none'}}
                   href={linkedInURL} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize={'small'}/>
                </a>
                {' '}{t('Common.and')}{' '}
                <a style={{color: 'initial', textDecoration: 'none'}} href={twitterURL} target="_blank"
                   rel="noopener noreferrer">
                    <XIcon fontSize={'small'}/>
                </a>
            </p>
        </div>
    );
};
export default HomePageContent;