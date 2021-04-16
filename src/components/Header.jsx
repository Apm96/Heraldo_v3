import React from 'react';
//import './Header.css'
import logo from '../img/el-heraldo-logo.svg';



function Header({titulo}) { 

    return ( 
        <div>
              <nav class="navbar navbar-default" data-spy="affix" data-offset-top="197">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="ejercicio1.html"><img style={{paddingBottom: '0px !important' }} width="200"
                            src={logo}></img></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Judiciales <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Clasificados</a></li>
                        <li><a href="#">Deportes</a></li>
                        <li><a href="#">Política</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">Noticias <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Lo mas visto del dia</a></li>
                                <li><a href="#">Tendencias</a></li>
                                <li><a href="#">Locales</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Nacionales</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Internacionales</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Digite lo que desee buscar"></input>
                        </div>
                        <button type="submit" class="btn btn-default">Buscar</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a data-toggle="popover" title="Informacion" data-placement="bottom"
                                data-content="Notificaciones" href="#"><span class="glyphicon glyphicon-bell"
                                    aria-hidden="true"></span></a></li>
                        <li><a data-toggle="popover" title="Informacion" data-placement="left" data-content="Ayuda"
                                href="#"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
              </nav>
        </div> 
    )
}

export default Header;