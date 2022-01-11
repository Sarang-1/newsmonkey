import React, { Component } from "react";
import LoadingIcon from "./LoadingIcon";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        pageSize: 6,
        category: 'general',
        color: 'primary'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            totalResults: '',
            page: 0
        };
        document.title = this.capitalize(this.props.category) + ' - NewsMonkey';
    }

    async componentDidMount() {
        this.switchScreen(1);
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    switchScreen = async (value) => {
        let newUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=858243694e1745bbb983c5c47eeb2270&page=${this.state.page + value}&pageSize=${this.props.pageSize}`;
        let newData = await fetch(newUrl);
        let newParsedData = await newData.json();
        this.setState({
            articles: newParsedData.articles,
            page: this.state.page + value,
            totalResults: newParsedData.totalResults
        });
    }
    
    fetchMoreData = async () => {
        let newUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=858243694e1745bbb983c5c47eeb2270&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let newData = await fetch(newUrl);
        let newParsedData = await newData.json();
        this.setState({
            articles: this.state.articles.concat(newParsedData.articles),
            page: this.state.page + 1,
        });
    }

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: 30 }}>Top Headlines - {this.props.category === 'General' ? 'Home' : this.props.category}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.totalResults !== this.state.articles.length}
                    loader={<LoadingIcon />}
                >
                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
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
                                    <NewsItem color={this.props.color} title={title} description={description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}
