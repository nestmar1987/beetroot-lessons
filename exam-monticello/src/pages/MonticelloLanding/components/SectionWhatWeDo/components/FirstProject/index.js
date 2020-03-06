// import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';
import Button from '../../../../../../components/Button';

// ----------------

export const FirstProject = ({ data }) => {
    // const modify = classNames({
    //   ' name': props,
    // });

    return (
        <div className="first-project__common-wrapper">
            <div className="first-project__image-wrap">
                <div
                    className="first-project__image"
                    style={{ backgroundImage: `url(${data.image})` }}
                ></div>
            </div>
            <div className="first-project__data-block">
                <div className="first-project__title">{data.title}</div>
                <div className="first-project__subtitle">{data.subtitle}</div>
                <div className="first-project__text">{data.text}</div>
                <Button withBorder borderColor largeSize>More Details</Button>
                <div className="first-project__adress">
                    <i className="material-icons">location_on</i>
                    {data.adress}
                </div>
            </div>
        </div>
    );
};

// ----------------

// Type of props

FirstProject.propTypes = {
    prop: types.string,
};

// Default value for props

FirstProject.defaultProps = {};
