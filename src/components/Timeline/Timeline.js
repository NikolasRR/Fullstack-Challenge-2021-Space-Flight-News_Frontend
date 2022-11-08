import { useContext, useEffect, useState } from "react";
import { Container, End, LoadMoreButton } from "./style";

import ArticlesContext from "../../contexts/articlesContext";
import Article from "../Article/Article";
import requests from "../../services/API/requests";
import { InfinitySpin } from 'react-loader-spinner'

function Timeline() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreNews, setnoMoreNews] = useState(false);

  const { page, setPage, searchValue, searching, sortOrder } = useContext(ArticlesContext);

  async function getNews() {
    setIsLoading(true);
    try {
      if(page === 0) {
        setnoMoreNews(false);
        const response = await requests.getNews(page, sortOrder, searchValue);
        setArticles(response.data);
      } else {
        const response = await requests.getNews(page, sortOrder, searchValue);
        if(response.data.length === 0) setnoMoreNews(true);
        setArticles([...articles, ...response.data]);
      }
    } catch (error) {
      alert("something went wrong");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getNews();
  }, [searching, page, sortOrder]);
  console.log(page);

  return (
    <Container>
      {articles.map((article, index) => <Article key={index} data={article} index={index} />)}
      {
        isLoading &&
        <InfinitySpin color="#d07017" />
      }
      {
        !isLoading && !noMoreNews &&
          <LoadMoreButton
            onClick={() => {
              setPage(page + 1);
            }}
          >Load More</LoadMoreButton>
      }
      {
        noMoreNews &&
        <End>There are no more news</End>
      }
    </Container>
  )
}

export default Timeline;