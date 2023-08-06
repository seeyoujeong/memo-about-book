import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e02a6df2887c41b0a88dfba1437445aa`
        );
    }, [category])

    if (loading) {
        return <NewListBlock>대기 중...</NewListBlock>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewListBlock>에러 발생!</NewListBlock>;
    }

    const { articles } = response.data;
    return (
        <NewListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewListBlock>
    );
};

export default NewsList;