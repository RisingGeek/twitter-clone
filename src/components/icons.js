import React from 'react';
import Svg from './styles/svg';

const Icon = (props) => (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height} fill={props.fill}>
        <g>
            {props.d.map(value => <path key={value} d={value}></path>)}
        </g>
    </Svg>
);

export default Icon;