import React, { useState,useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState('');
    const [page, setPage] = useState(0);

// document.title = capitalize(props.category) + ' - NewsMonkey';
    
useEffect(() => {
    switchScreen(1);
}, [])

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const switchScreen = async (value) => {
        props.setProgress(10);
        let newUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + value}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        let newData = await fetch(newUrl);
        props.setProgress(50);
        let newParsedData = await newData.json();
        props.setProgress(70);
        setArticles(newParsedData.articles);
        setPage(page+value);
        setTotalResults(newParsedData.totalResults);
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        let newUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let newData = await fetch(newUrl);
        let newParsedData = await newData.json();
        setArticles(articles.concat(newParsedData.articles));
        setPage(page+1)
    }

        return (
            <>
                <h1 className='text-center' style={{ margin: 30 }}>Top Headlines - {props.category === 'General' ? 'Home' : props.category}</h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={totalResults !== articles.length}
                    loader={<LoadingIcon />}
                >
                    <div className="container">
                        <div className="row">
                            {!loading && articles.map((element) => {
                                var title = '';
                                var description = '';
                                var desc = element.description ? JSON.stringify(element.description) : 'Click below to read more';

                                element.title.length > 55
                                    ? title = element.title.slice(0, 55) + '...'
                                    : title = element.title

                                desc.length > 88
                                    ? description = desc.slice(0, 88) + '...'
                                    : description = desc

                                return <div key={element.url} className="col-md-4 my-3">
                                    <NewsItem color={props.color} title={title} description={description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    
}


News.defaultProps = {
    pageSize: 6,
    category: 'general',
    color: 'primary'
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
