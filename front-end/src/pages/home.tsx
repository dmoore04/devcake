import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';

import NavBar from '../components/nav-bar';
import useContentSearch from '../hooks/useContentSearch';
import UserContext from '../contexts/UserContext';
import { Button, SingleContentCard } from '../styling/Components.styled';
import AddToBookmarks from '../components/AddToBookmarks';
import TopicSuggestion from '../components/TopicSuggestion';

const HomePage: React.FC = () => {
  const { user } = useContext(UserContext);
  const id = user._id;
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
    // <Main>
    <div className="container">
      <div className="left sidebar">
        <NavBar />
      </div>
      <div className="right">
        <TopicSuggestion />
      </div>

      <div className="middle">
        <ul className="content">
          {content.map((singleContent, index) => {
            if (content.length === index + 1) {
              return (
                <SingleContentCard
                  className="singleContent"
                  ref={lastItemElementref}
                  key={singleContent._id}
                >
                  <img
                    id="SingleContentImage"
                    className="item-1"
                    src={singleContent.imgUrl}
                    alt={singleContent.title}
                  />
                  <div className="card-content">
                    <h2 className="singleContentTitle">{singleContent.title}</h2>

                    <h4 className="singleContentTopic-type">
                      {singleContent.topic} {singleContent.type}
                    </h4>
                    <p>{singleContent.desc}</p>

                    <h4>{singleContent.provider}</h4>
                    <AddToBookmarks content_id={singleContent._id} />
                  </div>

                  <Button className="btn btn-primary">
                    <a href={singleContent.url} target="_blank" rel="noreferrer">
                      Learn More
                    </a>
                  </Button>
                </SingleContentCard>
              );
            } else {
              return (
                <SingleContentCard key={singleContent._id}>
                  <img
                    src={singleContent.imgUrl}
                    alt={singleContent.title}
                    id="SingleContentImage"
                  />

                  <div className="card-content">
                    <h2 className="singleContentTitle">{singleContent.title}</h2>

                    <p className="content-metadata">
                      {singleContent.provider} <span className="divider">▼</span>{' '}
                      {singleContent.type}
                    </p>

                    <p>{singleContent.desc}</p>
                    <AddToBookmarks content_id={singleContent._id} />
                  </div>
                  <div className="item-3">
                    <a href={singleContent.url} target="_blank" rel="noreferrer">
                      <Button className="btn btn-primary" id="nav-icon">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </SingleContentCard>
              );
            }
          })}
        </ul>
        {loading && hasMore && <p>loading...</p>}
        {error && <p>error</p>}
      </div>
    </div>
    // </Main>
  );
};

export default HomePage;
