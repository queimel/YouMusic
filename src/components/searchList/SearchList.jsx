import React, { Component } from 'react';
import FontAwesome, { FontawesomeObject } from '@fortawesome/fontawesome';
import { faEllipsisV } from '@fortawesome/fontawesome-free-solid';


class SearchList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            list: []
        }
    }


    handleItemClick(e){
        e.stopPropagation();
        let videoId = e.currentTarget.getAttribute('data-id');
        this.props.onClickedVideo(videoId);
    }

    render() {

        let items = this.props.results;

        return <div>
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  onClickCapture={this.handleItemClick.bind(this)}
                  data-id={index}
                >
                  <div className="info">
                    <div className="img">
                      <img src={item.songImg} />
                    </div>
                    <div className="txt">
                      <p>{item.songTitle}</p>
                    </div>
                  </div>
                  <div className="action">
                    <i className="fas fa-ellipsis-v fa-lg" />
                  </div>
                </li>
              ))}
            </ul>
          </div>;
    }
}

export default SearchList;