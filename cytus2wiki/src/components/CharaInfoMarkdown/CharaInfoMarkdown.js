import React, { Component } from 'react';
import Data from '../../db/db';
import ReactMarkdown from 'react-markdown';

class CharaInfoMarkdown extends Component {
    state = {
        terms:null
    }
    
    componentWillMount() {
        const url = this.props.url;
        fetch(require(''+url)).then((response) => response.text()).then((text) => {
          this.setState({ terms: text })
        })
    }

    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const lyricSource = songInfo.map((info) => (info.lyricSource));
        const lyricSourceLink = songInfo.map((info) => (info.lyricSourceLink));
        return (
            <ReactMarkdown source={this.state.terms} />
        );
    }
}

export default CharaInfoMarkdown;
