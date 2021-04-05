import React, {useContext} from 'react';
import applicationContext from '../context/applicationContext';

const ContentContainer = () => {
    const applicationData = useContext(applicationContext);
    return (<div>Hello Dinomatcher!</div>);
}

export default ContentContainer;