import React from 'react';
import { Link } from 'react-router-dom';

export default ({website}) => {
  return (
    <li className="website-index-li">
      <Link to={`/websites/${website.id}`}>
        <div className="the-meat-and">
          <figure>
            <img src="https://i.imgur.com/ZnNJLd8.jpg" className="website-index-img" />
          </figure>
          <div className="website-index-info">
            <h1 className="website-title">{website.title}</h1>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="website-index-footer">
            <h1>{website.author_id}</h1>
          </div>
        </div>
      </Link>
    </li>
  );
}
