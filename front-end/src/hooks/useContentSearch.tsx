import { useEffect, useState } from 'react';
import IContent from '../interfaces/contentsData.interface';
import { fetchContent } from '../utils/api';

type Hook = (props: any) => {
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  content: IContent[];
  pageNumber: number;
};

const useContentSearch: Hook = ({ id, pageNumber }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [content, setContent] = useState<IContent[]>([]);

  console.log(id, '<- id in content search hook');

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchContent(id, pageNumber)
      .then((res) => {
        setContent((currContent) => {
          return [
            ...new Set([
              ...currContent,
              ...res.map((item: IContent) => {
                return {
                  _id: item._id,
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
  }, [id, pageNumber]);
  return { loading, error, hasMore, content, pageNumber };
};

export default useContentSearch;
