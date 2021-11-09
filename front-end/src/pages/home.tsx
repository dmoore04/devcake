import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import IPage from '../interfaces/page';
import NavBar from '../components/nav-bar';
import useContentSearch from '../hooks/useContentSearch';
import UserContext from '../contexts/UserContext';

const HomePage: React.FC<IPage> = () => {
  const { user } = useContext(UserContext);
  const id = user._id;
  console.log(id, 'ID in home');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, hasMore, content } = useContentSearch({ id, pageNumber });
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
              <h2>{singleContent.title}</h2>

              <h4>
                {singleContent.topic} {singleContent.type}
              </h4>
              <p>{singleContent.desc}</p>
              <img src={singleContent.imgUrl} alt={singleContent.title} />
              <h4>{singleContent.provider}</h4>
              <a href={singleContent.url} target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          );
        } else {
          return (
            <div key={singleContent._id}>
              <h2>{singleContent.title}</h2>

              <h4>
                {singleContent.topic} {singleContent.type}
              </h4>
              <p>{singleContent.desc}</p>
              <img src={singleContent.imgUrl} alt={singleContent.title} />
              <h4>{singleContent.provider}</h4>
              <a
                className="btn btn-primary"
                href={singleContent.url}
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
          );
        }
      })}
      <div>{loading && hasMore && <p>loading...</p>}</div>
      <div>{error && <p>error</p>}</div>
    </div>
  );
};

export default HomePage;
