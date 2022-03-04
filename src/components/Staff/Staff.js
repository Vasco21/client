import React from 'react';
import './Staff.css';

export default function Staff ({ imgUrl, name, text }) {
        return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
