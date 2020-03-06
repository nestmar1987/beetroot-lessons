import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import './../../assets/images/image1.png';
import './../../assets/images/bg-footer.png';
import { ContentContainer } from '../../components/ContentContainer';
import {Logo} from '../Logo';
import { SocialBlock } from '../../pages/MonticelloLanding/components/Header/components/SocialBlock';
import {  socialLinks } from '../../pages/MonticelloLanding/components/Header/data';

// Styles

import './styles.scss';
import logo from '../../assets/icons/Logo.svg';

// ----------------

export const Footer = () => {
    return (
        <footer className="footer">
            <ContentContainer maxWidth="870">
            <div className="footer__content">
              <div className="footer__logo-wrap">
                <Logo maxWidth="254" svg={logo} />
                <div className="footer__text-wrap">
                  <p>Copyrights &copy; 2017 Monticello </p>
                  <p>Made with &hearts; by Ga Huy</p>
                </div>
              </div>
              <SocialBlock links={socialLinks} />
            </div>    
            </ContentContainer>
        </footer>
    );
};

// ----------------

// Type of props

Footer.propTypes = {
    prop: types.string,
};

// Default value for props

Footer.defaultProps = {};
