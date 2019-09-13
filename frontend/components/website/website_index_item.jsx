import React from 'react';
import { Link } from 'react-router-dom';

export default ({website}) => {
  return (
    <li className="website-index-li">
        <div className="the-meat-and">
          <figure className="the-figures">
          <Link to={`/websites/${website.id}`}>
              <img src={website.thumbnail} className="website-index-img" />
          </Link>
          </figure>
          <div className="website-index-info">
            <h1 className="website-title">{website.title}</h1>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="website-index-footer">
            <h1>{website.author_name}</h1>
          </div>
        </div>
    </li>
  );
}
