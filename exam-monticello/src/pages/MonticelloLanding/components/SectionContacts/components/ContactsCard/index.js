import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import Button from '../../../../../../components/Button';
import { SectionTitle } from '../../../../../../components/SectionTitle';

// Styles

import './styles.scss';

// ----------------

export const ContactsCard = ({ data }) => {
    return (
        <div className="contacts-card">
            <SectionTitle
                className="contacts__title"
                fluidWidth
                color="secondary"
                title="Get In Touch"
            />
            <div className="contacts-common-wrap">
                <div className="contacts-data-wrap">
                    <div>
                        <i class="material-icons">location_on</i>
                        {data.adress}
                    </div>
                    <div>
                        <i class="material-icons">phone</i>
                        {data.phone}
                    </div>
                    <div>
                        <i class="material-icons">drafts</i>
                        {data.email}
                    </div>
                    <div>
                        <i class="material-icons">query_builder</i>
                        {data.timetable}
                    </div>
                </div>
                <div className="contacts-form-wrap">
                    <Button withBorder borderColor smallSize>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

// ----------------

// Type of props

ContactsCard.propTypes = {
    prop: types.string,
};

// Default value for props

ContactsCard.defaultProps = {};
