import React, { Component } from 'react';
import Data from '../../db/db';
import ReactMarkdown from 'react-markdown';

class Notes extends Component {
    state = {
        terms:null
    }

    componentWillMount() {
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const url = songInfo.map((info) => (info.notesUrl));
        fetch(require(''+url)).then((response) => response.text()).then((text) => {
          this.setState({ terms: text })
        })
    }

    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const IntroSource = songInfo.map((info) => (info.IntroSource));
        const IntroSourceLink = songInfo.map((info) => (info.IntroSourceLink));
        return (
            <div>
                <div className={"round-box-top " + songColor }>
                    <font className="song-table-font">备注</font>
                </div>
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#notes">
                                    点击展开
                                </a>
                            </h4>
                        </div>
                        <div id="notes" className="panel-collapse collapse">
                            <div className="panel-body content-box-background">
                                <font className="content-font"><ReactMarkdown source={this.state.terms} /></font>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Notes;
