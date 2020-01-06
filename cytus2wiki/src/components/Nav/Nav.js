import React, { Component } from 'react';

class Nav extends Component {
  
    render(){
        return (
            <div>
                <nav class="navbar navbar-default navbar-fixed-top wiki-navbar" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">
                                <font class="navbar-title"><b>CYTUS II</b> wiki</font>
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbar-menu">
                            <ul class="nav navbar-nav">
                                <li class="cative"><a href="http://cytus2wiki.com/" class="navbar-subtitle">首页</a></li>
                                <li class="cative"><a href="http://cytus2wiki.com/about_game.php" class="navbar-subtitle">游戏简介</a></li>
                                <li class="dropdown">
                                    <a href="chara_list.php" class="navbar-subtitle dropdown-toggle" data-toggle="dropdown">角色<b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="http://cytus2wiki.com/chara_list.php">一览</a></li>
                                        <li class="divider"></li>
                                        <li><a href="http://cytus2wiki.com/PAFF.php">Paff</a></li>
                                        <li><a href="http://cytus2wiki.com/NEKO1.php">NEKO#ΦωΦ</a></li>
                                        <li><a href="http://cytus2wiki.com/ROBO_Head.php">ROBO_Head</a></li>
                                        <li><a href="http://cytus2wiki.com/Ivy.php">Ivy</a></li>
                                        <li><a href="http://cytus2wiki.com/Crystal_PuNK.php">Crystal PuNK</a></li>
                                        <li><a href="http://cytus2wiki.com/Miku.php">Miku</a></li>
                                        <li><a href="http://cytus2wiki.com/Xenon.php">Xenon</a></li>
                                        <li><a href="http://cytus2wiki.com/ConneR.php">ConneR</a></li>
                                        <li><a href="http://cytus2wiki.com/Cherry.php">Cherry</a></li>
                                        <li><a href="http://cytus2wiki.com/JOE.php">JOE</a></li>
                                        <li><a href="http://cytus2wiki.com/Aroma.php">Aroma</a></li>
                                        <li><a href="http://cytus2wiki.com/Nora.php">Nora</a></li>
                                        <li><a href="http://cytus2wiki.com/Neko2.php">Neko</a></li>
                                    </ul>
                                </li>
                                <li class="cative"><a href="/songlist" class="navbar-subtitle">曲目一览</a></li>
                                <li class="cative"><a href="http://cytus2wiki.com/difficulty_list.php" class="navbar-subtitle">难度表</a></li>
                                <li class="dropdown">
                                    <a href="" class="navbar-subtitle dropdown-toggle" data-toggle="dropdown">剧情<b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="http://cytus2wiki.com/story_outline.php">重要事件时间线</a></li>
                                        <li class="divider"></li>
                                        <li><a href="">iM</a></li>
                                        <li><a href="">&ltOS&gt</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="" class="navbar-subtitle dropdown-toggle" data-toggle="dropdown">Artists<b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="">音乐</a></li>
                                        <li><a href="">曲绘</a></li>
                                    </ul>
                                </li>
                                <li class="cative"><a href="http://cytus2wiki.com/update.php" class="navbar-subtitle">版本更新</a></li>
                                <li class="cative"><a href="http://cytus2wiki.com/about_wiki.php" class="navbar-subtitle">关于wiki</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        	</div>
        );
    }
}

export default Nav;
