import React from 'react';
import WebsiteIndexItem from './website_index_item';

class ChirpIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWebsites();
  }

  render() {
    const { websites } = this.props;
    return (
      <div>
        <ul>
          <h1>AHHHHHHHHHHHHH</h1>
          {
            websites.map(website => (
              <WebsiteIndexItem
              key={website.id}
              website={website}
              fetchWebsite={this.props.fetchWebsite}
              />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ChirpIndex;
