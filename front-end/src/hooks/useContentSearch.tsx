import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';
import axios, { CancelTokenSource } from 'axios';

const useContentSearch: React.FC<IPage> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [content, setContent] = useState<[]>([]);
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: 'GET',
      url: '',
      // params: pageNumber
      // cancelToken: new axios.CancelToken((c) => {
      //   cancel = c;
      // }),
    })
      .then((res) => {
        setContent((currContent) => {
          return [...currContent, res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [props]);
  return <div></div>;
};

export default useContentSearch;
