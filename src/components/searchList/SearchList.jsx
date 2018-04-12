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




    componentWillReceiveProps(){

        if(this.props.results.length === 0){
            this.setState({list: this.lastSearches() })
         }else{
             this.setState({list: this.props.results})
         }
    }


    lastSearches(){
        return JSON.parse(localStorage.getItem("latestSearches"));
    }
        
    handleItemClick(e){
        e.stopPropagation();
        let videoId = e.currentTarget.getAttribute('data-id');
        this.props.onClickedVideo(videoId);
    }

    render() {

        let items = this.state.list;

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