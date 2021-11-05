import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';
import axios, { CancelTokenSource } from 'axios';

const HomePage: React.FC<IPage> = (props) => {
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div>
      <NavBar />
      <p>This is the homepage!</p>
    </div>
  );
};

export default HomePage;
