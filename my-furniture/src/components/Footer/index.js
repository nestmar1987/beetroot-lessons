import types from 'prop-types';
import React, { useState } from 'react';

import { ContentContainer } from '../ContentContainer';
import { SocialBlock } from '../Footer/components/SocialBlock';

import './styles.scss';
import {contacts, socialLinks } from './data.js';




export const Footer = () => {
  
  return (
    <footer className="footer">
      <ContentContainer>
        <div className="footer__content">
          <p className="footer__content-title">Contacts</p>
          <div className="footer__contacts">
            <div className="footer__contact-wrap">
              <div className="footer__icon">
                <i class="material-icons">location_on</i>
              </div>
              <span>{contacts.adress}</span>
            </div>
            <div className="footer__contact-wrap">
              <div className="footer__icon">
                <i class="material-icons">phone</i>
              </div>
              <span>{contacts.phone}</span>
            </div>
            <div className="footer__contact-wrap">
              <div className="footer__icon">
                <i class="material-icons">drafts</i>{' '}
              </div>
              <span>{contacts.email}</span>
            </div>
            <div className="footer__contact-wrap">
              <div className="footer__icon">
                <i class="material-icons">query_builder</i>
              </div>
              <span>{contacts.timetable}</span>
            </div>
          </div> 
          <SocialBlock links={socialLinks} />
          <div className="footer__text-wrap">
            Copyrights &copy; 2017 | Made with &hearts; by Marina Nestarenko
          </div>
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
