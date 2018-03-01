import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/style.scss";
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
document.addEventListener('DOMContentLoaded', function(){
    class Template extends React.Component {
        render() {
            return <div>
                {this.props.children}
            </div>;
        }
    }
    class Home extends React.Component{
        render(){
            return (
                <div className='home'>
                    <Menu/>
                </div>
            )
        }
    }

    class News extends React.Component{
        render(){
            return (
                <div className='news'>
                    <Menu/>
                </div>
            )
        }
    }
    class Match extends React.Component{
        render(){
            const matchDay=[
                {data:'12 wrzesień', hour:"20:30", rival:'Kuba'},
                {data:'13 wrzesień', hour:"17:00", rival:'Portoryko'},
                {data:'15 wrzesień', hour:"20:30", rival:'Finlandia'},
                {data:'17 wrzesień', hour:"20:30", rival:'Iran'},
                {data:'18 wrzesień', hour:"20:30", rival:'Bułgaria'}
            ];
            const matchlist=matchDay.map((i,index)=>{
                return (
                    <tr key={index}>
                        <td>{i.data}</td>
                        <td>{i.hour}</td>
                        <td>{i.rival}</td>
                    </tr>
                )
            });
            return (
                <div className='match'>
                    <Menu/>
                    <p>Terminarz pierwszej fazy MŚ 2018 siatkarzy</p>
                    <table>
                        <tr>
                            <td>Data spotkania</td>
                            <td>Godzina meczu</td>
                            <td>Przeciwnik</td>
                        </tr>
                        {matchlist}
                    </table>
                </div>
            )
        }
    }
    class Players extends React.Component{
        render(){
            return (
                <div className='players'>
                    <Menu/>
                </div>
            )
        }
    }
    class Gallery extends React.Component{
        render(){
            return (
                <div className='gallery'>
                    <Menu/>
                </div>
            )
        }
    }
    class Contact extends React.Component{
        render(){
            return (
                <div className='contact'>
                    <Menu/>
                </div>
            )
        }
    }

    class Menu extends React.Component{
        render(){
            return (
                <div>
                    <ul className='menu'>
                        <li><IndexLink to="/" className='indexLink'>Strona główna</IndexLink></li>
                        <li><IndexLink to="/news" className='indexLink'>Aktualności</IndexLink></li>
                        <li><IndexLink to="/match" className='indexLink'>Mecze</IndexLink></li>
                        <li><IndexLink to="/players" className='indexLink'>Zawodnicy</IndexLink></li>
                        <li><IndexLink to="/gallery" className='indexLink'>Galeria</IndexLink></li>
                        <li><IndexLink to="/contact" className='indexLink'>Kontakt</IndexLink></li>
                    </ul>
                </div>
            )
        }
    }
    class App extends React.Component{
        render(){
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home}/>
                        <Route path='/news' component={News}/>
                        <Route path='/match' component={Match}/>
                        <Route path='/players' component={Players}/>
                        <Route path='/gallery' component={Gallery}/>
                        <Route path='/contact' component={Contact}/>
                    </Route>
                </Router>
            )
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )


});
