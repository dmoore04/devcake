import { useEffect, useState } from 'react';
import axios from 'axios';
import IContent from '../interfaces/contentsData.interface';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchContent = async (page?: number) => {
  let path = '/content';
  if (page) path += `?page=${page}`;
  const res = await api.get(path);
  return res.data.content.docs;
};

type Hook = (props: any) => {
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  content: IContent[];
  pageNumber: number;
};

const useContentSearch: Hook = (pageNumber) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [content, setContent] = useState<IContent[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchContent(pageNumber)
      .then((res) => {
        setContent((currContent) => {
          return [
            ...new Set([
              ...currContent,
              ...res.map((item: IContent) => {
                return {
                  title: item.title,
                  desc: item.desc,
                  url: item.url,
                  imgUrl: item.imgUrl,
                  provider: item.provider,
                  type: item.type,
                  topic: item.topic,
                };
              }),
            ]),
          ];
        });
        setHasMore(res.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [pageNumber]);
  return { loading, error, hasMore, content, pageNumber };
};

export default useContentSearch;
