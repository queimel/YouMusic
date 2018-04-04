import React, { Component } from 'react';

class AudioPlayer extends Component {

    constructor(props) {
        super(props);
        this.Player = React.createRef();
    }
    
    parse_str(str) {
        return str.split('&').reduce(function(params, param) {
          var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
          });
          params[paramSplit[0]] = paramSplit[1];
          return params;
        }, {});
    }

    componentDidMount(){
        const vid = "3r_Z5AYJJd4", audio_streams = {};
        fetch ('https://www.youtube.com/get_video_info?video_id=' + vid, {
            headers : { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/x-www-form-urlencoded'
             }
      
        })
        .then( (response) => { return response.text() } )
        .then( (data) => { 
            let datos = this.parse_str(data)
            let streams = (datos.url_encoded_fmt_stream_map + ',' + datos.adaptive_fmts).split(',');

            streams.map((n, s) => {
                let stream = this.parse_str(n),
                  itag = stream.itag * 1,
                  quality = false;
                switch (itag) {
                  case 139:
                    quality = "48kbps";
                    break;
                  case 140:
                    quality = "128kbps";
                    break;
                  case 141:
                    quality = "256kbps";
                    break;
                }

                if (quality) audio_streams[quality] = stream.url;

                
            })

            this.Player.current.src = audio_streams['128kbps'];
        }) // then   
        
        

    }// component DId Mount


    render() {
        return (
            <div>
                <audio controls="controls" id="audio" ref={this.Player} src=""> </audio>
            </div>
        );
    }
}

export default AudioPlayer;