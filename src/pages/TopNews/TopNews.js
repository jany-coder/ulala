import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopNewsCard from './TopNewsCard';

const TopNews = () => {
    const [news, setNews] = useState([]);


    useEffect(() => {
        const getNews = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d5bc5f981d7a4c98af03dea0a15a36c9");
            setNews(res?.data?.articles);
        }

        getNews();
    }, [])



    return (
        <div className="container mt-4">
            <div class=" text-center mb-3" >
                <h4 class="d-inline p-2 rounded" style={{ border: "1px solid green" }}><strong>ULALA TOP NEWS</strong></h4>
            </div>

            {
                news.map(data => <TopNewsCard data={data}></TopNewsCard>)
            }
        </div>
    );
};

export default TopNews;