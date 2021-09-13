import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link, RouteComponentProps } from 'react-router-dom';

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`loading ${props.name}`);

        let number = props.match.params.number;

        if (number) {
            setMessage(`The number is ${number}`)
        } else {
            setMessage('No number was provider!')
        }
    }, [props])

    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    )
}

export default AboutPage;