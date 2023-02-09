import React from 'react';
import PropTypes from 'prop-types';
import './Contracts.css';
import male from './male.png';
import female from './female.png';
import hermaphrodite from './hermaphrodite.png';


const Contracts = (props) => {
    return (
        <div className='block'>
            <div className='people'>
            <span>Ім'я: {props.firstName}</span>
            <span>Прізвище: {props.lastName}</span>
            <span>Номер тел.:{props.phone}</span>
            <span>Стать: {props.gender}<img src={
                props.gender==undefined?hermaphrodite:
                props.gender=='male'?male:female}
                ></img>
            </span>
            </div>
        </div>
    );
};



export default Contracts;
