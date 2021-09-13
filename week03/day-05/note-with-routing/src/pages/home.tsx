import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const HomePage: React.FC<IPage> = props => {
    
    useEffect(() => {
        logging.info(`loading ${props.name}`);
    }, [])

    return (
        <div>
            https://www.youtube.com/watch?v=J6jzDfHoj-Y
            <p>This is the home page!</p>
        </div>
    )
}

export default HomePage;