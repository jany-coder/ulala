import React from 'react';

const TopNewsCard = (props) => {

    const { title, description, urlToImage, publishedAt} = props.data;

    return (
        <div class="card mb-4 w-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={urlToImage} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">{publishedAt}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNewsCard;