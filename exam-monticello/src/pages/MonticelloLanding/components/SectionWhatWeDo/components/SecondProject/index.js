// import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

import Button from '../../../../../../components/Button';



export const SecondProject = ({ data }) => {
    // const modify = classNames({
    //   ' name': props,
    // });

    return (
        <div className="second-project__common-wrapper">
            <div className="second-project__data-block">
                <div className="second-project__title">{data.title}</div>
                <div className="second-project__subtitle">{data.subtitle}</div>
                <div className="second-project__text">{data.text}</div>
                <Button withBorder borderColor largeSize>More Details</Button>
                <div className="second-project__adress">
                    <i className="material-icons">location_on</i>
                    {data.adress}
                </div>
            </div>
            <div className="second-project__image-wrap">
                <div
                    className="second-project__image"
                    style={{ backgroundImage: `url(${data.image})` }}
                ></div>
            </div>
        </div>
    );
};

// ----------------

// Type of props

SecondProject.propTypes = {
    prop: types.string,
};

// Default value for props

SecondProject.defaultProps = {};
