import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
  
    render(){
        return (
            <div>
                <Router>
                <nav className="navbar navbar-default navbar-fixed-top wiki-navbar" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                                <font className="navbar-title"><b>CYTUS II</b> wiki</font>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav">
                                <li className="cative"><HashLink to="/#top" className="navbar-subtitle">首页</HashLink></li>
                                <li className="cative"><a href="http://cytus2wiki.com/about_game.php" className="navbar-subtitle">游戏简介</a></li>
                                <li className="dropdown">
                                    <a href="chara_list.php" className="navbar-subtitle dropdown-toggle" data-toggle="dropdown">角色<b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="http://cytus2wiki.com/chara_list.php">一览</a></li>
                                        <li className="divider"></li>
                                        <li><HashLink to="/PAFF/#top">Paff</HashLink></li>
                                        <li><HashLink to="/NEKO#ΦωΦ/#top">NEKO#ΦωΦ</HashLink></li>
                                        <li><HashLink to="/ROBO_Head/#top">ROBO_Head</HashLink></li>
                                        <li><HashLink to="/Ivy/#top">Ivy</HashLink></li>
                                        <li><HashLink to="/Crystal PuNK/#top">Crystal PuNK</HashLink></li>
                                        <li><HashLink to="/Miku/#top">Miku</HashLink></li>
                                        <li><HashLink to="/Xenon/#top">Xenon</HashLink></li>
                                        <li><HashLink to="/ConneR/#top">ConneR</HashLink></li>
                                        <li><HashLink to="/Cherry/#top">Cherry</HashLink></li>
                                        <li><HashLink to="/JOE/#top">JOE</HashLink></li>
                                        <li><HashLink to="/Aroma/#top">Aroma</HashLink></li>
                                        <li><HashLink to="/Nora/#top">Nora</HashLink></li>
                                        <li><a href="http://cytus2wiki.com/Neko2.php">Neko</a></li>
                                    </ul>
                                </li>
                                <li className="cative"><HashLink to="/songlist/#top" className="navbar-subtitle">曲目一览</HashLink></li>
                                <li className="cative"><a href="http://cytus2wiki.com/difficulty_list.php" className="navbar-subtitle">难度表</a></li>
                                <li className="dropdown">
                                    <a href="" className="navbar-subtitle dropdown-toggle" data-toggle="dropdown">剧情<b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="http://cytus2wiki.com/story_outline.php">重要事件时间线</a></li>
                                    </ul>
                                </li>
                                <li className="cative"><a href="http://cytus2wiki.com/update.php" className="navbar-subtitle">版本更新</a></li>
                                <li className="cative"><a href="http://cytus2wiki.com/about_wiki.php" className="navbar-subtitle">关于wiki</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </Router>
        	</div>
        );
    }
}

export default Nav;
