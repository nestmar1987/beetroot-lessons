import types from 'prop-types';
import React from 'react';
import { ContentContainer } from '../../../../components/ContentContainer';
import { Footer } from '../../../../components/Footer';
import ContactsMap from './components/ContactsMap';
import {ContactsCard} from './components/ContactsCard';
import data from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionContacts = () => {
    return (
        <section className="contacts">
            <ContactsMap />
            {/* <SectionTitle
          className="contacts__title"
          fluidWidth
          color="secondary"
          title="Get in touch"/> */}

            {/* <Button withBorder borderColor smallSize> Submit </Button> */}
            <ContactsCard data={data}/>
            <Footer />
        </section>
    );
};

// ----------------

// Type of props

SectionContacts.propTypes = {
    prop: types.string,
};

// Default value for props

SectionContacts.defaultProps = {};
