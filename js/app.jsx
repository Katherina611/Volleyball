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
            return (
                <div className='match'>
                    <Menu/>
                    <WorldChamp/>
                    <WorldLeague/>
                </div>
            )
        }
    }
    class WorldChamp extends React.Component{
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
                <div>
                    <p>Terminarz pierwszej fazy MŚ 2018 siatkarzy</p>
                    <div className='table1'>
                        <table>
                            <thead>
                            <tr>
                                <th>Data spotkania</th>
                                <th>Godzina meczu</th>
                                <th>Przeciwnik</th>
                            </tr>
                            </thead>
                            <tbody>
                            {matchlist}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
    class WorldLeague extends React.Component{
        render(){
            const matchWeekend=[
                {data:'25-27.05', host:"Polska", rivals:'Korea Południowa, Rosja, Kanada'},
                {data:'1-3.06', host:"Polska", rivals:'Niemcy, Francja, Chiny'},
                {data:'8-10.06', host:"Japonia", rivals:'Włochy, Bułgaria, Japonia'},
                {data:'15-17.06', host:"USA", rivals:'Serbia, Iran, USA'},
                {data:'22-24.06', host:"Australia", rivals:'Brazylia, Argentyna, Australia'}
            ];
            const matchLeague=matchWeekend.map((i,index)=>{
                return (
                    <tr key={index}>
                        <td>{i.data}</td>
                        <td>{i.host}</td>
                        <td>{i.rivals}</td>
                    </tr>
                )
            });
            return (
                <div>
                    <p>Terminarz Ligi Światowej 2018 siatkarzy</p>
                    <div className='table2'>
                        <table>
                            <thead>
                            <tr>
                                <th>Data spotkań</th>
                                <th>Gospodarz spotkania</th>
                                <th>Przeciwnicy</th>
                            </tr>
                            </thead>
                            <tbody>
                            {matchLeague}
                            </tbody>
                        </table>
                    </div>

                </div>
            )
        }
    }
    class Players extends React.Component{
        render(){
            const playersInfo=[
                {name:'Piotr Nowakowski', number:'1', data:"18 grudnia 1987r. Żyrandów", height:'205 cm',weight:'100kg', position:'środkowy', attack:'368 cm', block:'350cm', club:'Trefl Gdańsk', img:'images/Piotr-Nowakowski.jpg'},
                {name:'Dawid Konarski', number:'3', data:"31 sierpnia 1989r. Świecie", height:'198 cm',weight:'101kg', position:'atakujący', attack:'355 cm', block:'335cm', club:'Ziraat Bankası Ankara', img:'images/Dawid-Konarski.jpeg'},
                {name:'Bartosz Kurek', number:'6', data:"29 sierpnia 1988r. Wałbrzych", height:'205 cm',weight:'105kg', position:'przyjmujący/atakujący', attack:'375 cm', block:'340cm', club:'Ziraat Bankası Ankara', img:'images/Bartosz-Kurek.jpg'},
                {name:'Karol Kłos', number:'7', data:"8 sierpnia 1989r. Warszawa", height:'201 cm',weight:'87kg', position:'środkowy', attack:'360 cm', block:'330cm', club:'PGE Skra Bełchatów', img:'images/Karol-Kłos.jpg'},
                {name:'Andrzej Wrona', number:'8', data:"27 grudnia 1988r. Warszawa", height:'206 cm',weight:'95kg', position:'środkowy', attack:'355 cm', block:'335cm', club:'ONICO Warszawa', img:'images/Andrzej-Wrona.jpeg'},
                {name:'Bartłomiej Lemański', number:'9', data:"19 marca 1996r. Warszawa", height:'217 cm',weight:'105kg', position:'środkowy', attack:'355 cm', block:'335cm', club:'Asseco Resovia Rzeszów', img:'images/Bartłomiej-Lemański.jpeg'},
                {name:'Damian Wojtaszek', number:'10', data:"7 września 1988r. Milcz", height:'180 cm',weight:'76kg', position:'libero', attack:'330 cm', block:'301cm', club:'ONICO Warszawa', img:'images/Damian-Wojtaszek.jpeg'},
                {name:'Fabian Drzyzga', number:'11', data:"3 stycznia 1990r. Bordeaux", height:'196 cm',weight:'86kg', position:'rozgrywający', attack:'342 cm', block:'305cm', club:'Olympiakos Pireus', img:'images/Fabian-Drzyzga.jpeg'},
                {name:'Grzegorz Łomacz', number:'12', data:"1 października 1987r. Ostrołęka", height:'178 cm',weight:'81kg', position:'rozgrywający', attack:'336 cm', block:'309cm', club:'PGE Skra Bełchatów', img:'images/Grzegorz-Łomacz.jpg'},
                {name:'Michał Kubiak', number:'13', data:"23 lutego 1988r. Wałcz", height:'191 cm',weight:'87kg', position:'przyjmujący', attack:'340 cm', block:'320cm', club:'Panasonic Panthers', img:'images/Michał-Kubiak.jpeg'},
                {name:'Paweł Zatorski', number:'17', data:"21 czerwca 1990r. Łódź", height:'184 cm',weight:'73kg', position:'libero', attack:'328 cm', block:'304cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Paweł-Zatorski.jpg'},
                {name:'Rafał Buszek', number:'21', data:"28 kwietnia 1987r. Dębica", height:'196 cm',weight:'81kg', position:'przyjmujący', attack:'348 cm', block:'327cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Rafał-Buszek.jpeg'},
                {name:'Mateusz Bieniek', number:'23', data:"5 kwietnia 1994r. Blachownia", height:'210 cm',weight:'98kg', position:'środkowy', attack:'351 cm', block:'329cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Mateusz-Bieniek.jpeg'},
            ];
            const players=playersInfo.map((i, index)=>{
                return (
                    <div key={index} className='playersTable'>
                        <table className='table3'>
                        <tbody>
                        <tr>
                            <td><img src={i.img}/></td>
                        </tr>
                        <tr>
                            <td>{i.name}</td>
                        </tr>
                            <tr>
                                <td>Data i miejsce urodzenia: {i.data}</td>
                            </tr>
                            <tr>
                                <td>Wzrost: {i.height}</td>
                            </tr>
                            <tr>
                                <td>Waga: {i.weight}</td>
                            </tr>
                            <tr>
                                <td>Pozycja: {i.position}</td>
                            </tr>
                            <tr>
                                <td>Numer w reprezentacji: {i.number}</td>
                            </tr>
                            <tr>
                                <td>Zasięg w ataki: {i.attack}</td>
                            </tr>
                            <tr>
                                <td>Zasięg w bloku: {i.block}</td>
                            </tr>
                            <tr>
                                <td>Obecny klub: {i.club}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )
            });
            return (
                <div className='players'>
                    <Menu/>
                    <section>
                        {players}
                    </section>
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
