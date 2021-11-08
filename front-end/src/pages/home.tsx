import React, { useEffect, useState, useRef, useCallback } from 'react';
import IPage from '../interfaces/page';
import NavBar from '../components/nav-bar';
import useContentSearch from '../hooks/useContentSearch';

const HomePage: React.FC<IPage> = (props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, hasMore, content } = useContentSearch(pageNumber);
  const observer = useRef<IntersectionObserver>();
  useEffect(() => {}, [pageNumber]);
  const lastItemElementref = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => {
            let newPageValue: number = prevPage + 1;
            return newPageValue;
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div>
      <NavBar />
      <p>This is the homepage!</p>
      {content.map((singleContent, index) => {
        if (content.length === index + 1) {
          return (
            <div ref={lastItemElementref} key={singleContent._id}>
              {singleContent}
            </div>
          );
        } else {
          return <div key={singleContent._id}>{singleContent}</div>;
        }
      })}
      <div>{loading && hasMore && <p>loading...</p>}</div>
      <div>{error && <p>error</p>}</div>
    </div>
  );
};

export default HomePage;
