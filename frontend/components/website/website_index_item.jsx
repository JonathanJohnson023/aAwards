import React from 'react';

export default ({website, fetchWebsite}) => {
  let pass = website.id
  return (
    <li>
      <h3 >{website.title}</h3>
      <ul>
        <li>{Object.values(website)}</li>
        <li>{pass}</li>
      </ul>
      <button onClick={() => fetchWebsite(website.id)}></button>
    </li>
  );
}
