import React from 'react';
import classes from './MobileContainer.module.css';

 const MobileContainer = (props) => {
    return <div className={classes.container}>{props.children}</div>
}

export default MobileContainer;

