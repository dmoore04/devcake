import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps } from 'react-router-dom';

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    logging.info(`Loading ${props.name}`);

    let number = props.match.params.number;
    console.log(number);

    if (number) {
      setMessage(`The number is ${number}`);
    } else {
      setMessage('no number provided');
    }
  }, [props]);
  return <p>{message}</p>;
};

export default AboutPage;
