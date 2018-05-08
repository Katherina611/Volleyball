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
                    <News1/>
                    <News2/>
                </div>
            )
        }
    }

    class News1 extends React.Component{
        render(){
            return (
                <div className='news1'>
                    <img src="images/trener.jpg"/>
                    <span><IndexLink to="/news/news1">Kim jest nowy trener polskich siatkarzy?</IndexLink>
                    <p>
                        Ma 48 lat, biegle włada kilkoma językami i ma niekonwencjonalny sposób
                        prowadzenia drużyn – Belg Vital Heynen został selekcjonerem kadry polskich
                        siatkarzy i podjął się trudnego zadania. W swojej karierze udowodnił, że
                        umie poprowadzić zespół do sukcesów.
                    </p>
                    </span>
                </div>
            )
        }
    }
    class News1Extend extends React.Component{
        render(){
            return (
                <div className='coach'>
                    <h1>Kim jest nowy trener polskich siatkarzy?</h1>
                    <img src="images/trener.jpg"/>
                    <span>
                        Opinie o Heynenie są różne. Jedni mówią, że to selekcjoner na lata,
                        inni, że dobry na rok. Pewne jest, że Belg potrafi znaleźć wspólny
                        język z wielkimi gwiazdami, a także z juniorami. Potrafi scalić zespół,
                        sprawić, by wszyscy szli za nim w ogień. Udowodnił to już dwukrotnie –
                        najpierw z reprezentacją Niemiec, a potem Belgii.
                        W wyścigu o fotel szkoleniowca polskiej kadry w ostatnim etapie pokonał dwóch
                        Polaków – Piotra Gruszkę i Andrzeja Kowala. Miał jedną ważną przewagę nad
                        pozostałymi kandydatami – prowadził już narodowe kadry i to z sukcesem.
                        Belg prowadził także kilka zespołów klubowych. Teraz jest trenerem niemieckiego VfB
                        Friedrichshafen i dostał zgodę od polskiego związku, by łączyć oba stanowiska.
                        Znany jest także z PlusLigi – w latach 2013-15 pracował z siatkarzami
                        Transferu Bydgoszcz. A szkoleniową karierę zaczynał z Noliko Maseeik,
                        belgijski klub objął w 2005 roku i spędził tam siedem lat. Wcześniej występował w nim
                        w roli rozgrywającego. Zresztą to jedyny klub, z jakim był związany jako zawodnik. Rok pracował
                        też w tureckim Ziraat Bankasi Ankara (2012/13) i francuskim Tours VB (2015/16).
                    </span>
                    <IndexLink to="/news">Wróć do aktualności</IndexLink>
                </div>
            )
        }
    }
    class News2 extends React.Component{
        render(){
            return (
                <div className='news1'>
                    <img src="images/news2.jpg"/>
                    <span><IndexLink to="/news/news2">Polscy siatkarze rozpoczynają przygotowania pod wodzą Heynena</IndexLink>
                    <p>
                        Powołani do szerokiej kadry na mecze Ligi Narodów polscy siatkarze przyjadą
                        do Warszawy, by w dwóch kolejnych dniach przejść badania i załatwić procedury
                        wizowe. Potem przeniosą się do Spały, gdzie zaczną treningi pod wodzą Vitala
                        Heynena.
                    </p>
                    </span>
                </div>
            )
        }
    }

    class News2Extend extends React.Component{
        render(){
            return (
                <div className='coach'>
                    <h1>Polscy siatkarze rozpoczynają przygotowania pod wodzą Heynena</h1>
                    <img src="images/news2.jpg"/>
                    <div>
                        <span>Heynen, który dopiero rozpoczyna pracę w roli szkoleniowca biało-czerwonych,
                        powołał do szerokiej kadry 26 zawodników. Dodatkowo do udziału w zajęciach
                        w Spale zaprosił rozgrywającego Łukasza Kozuba i libero Mateusza Masłowskiego,
                        którzy nie są przewidziani do występu w LN. W poniedziałkowy wieczór kadrowicze
                        nie będą jeszcze jednak w komplecie.
                        Jak poinformował rzecznik polskiej reprezentacji Mariusz Szyszko, zgrupowanie rozpocznie się
                        tak naprawdę w czwartek,kiedy rano odbędzie się w Spale pierwszy trening.
                        Zajęcia poprowadzi Heynen.Belg w lutym zastąpił zwolnionego w ubiegłym roku -
                        po nieudanym występie w mistrzostwach Europy - Włocha Ferdinando De Giorgiego.
                        </span>
                        <div className="news-bold">Kadra na mecze Ligi Narodów siatkarzy 2018:<br></br>
                            <p>rozgrywający: Fabian Drzyzga (Olympiakos Pireus), Grzegorz Łomacz, Marcin Janusz (obaj PGE Skra Bełchatów), Marcin Komenda (GKS Katowice);</p>
                            <p>przyjmujący: Bartosz Bednorz (PGE Skra Bełchatów), Tomasz Fornal (Cerrad Czarni Radom), Michał Kubiak (Panasonic Panthers, Japonia), Bartosz Kwolek (ONICO Warszawa), Artur Szalpuk, Mateusz Mika (obaj Trefl Gdańsk), Aleksander Śliwka (Asseco Resovia Rzeszów);</p>
                            <p>atakujący: Łukasz Kaczmarek (Cuprum Lubin), Dawid Konarski (Jastrzębski Węgiel), Bartosz Kurek (Ziraat Bankasi), Maciej Muzaj (Jastrzębski Węgiel), Damian Schulz (Trefl Gdańsk);</p>
                            <p>środkowi: Mateusz Bieniek (ZAKSA Kędzierzyn-Koźle), Norbert Huber (Cerrad Czarni Radom), Jakub Kochanowski (Indykpol AZS Olsztyn), Bartłomiej Lemański (Asseco Resovia Rzeszów), Jan Nowakowski (ONICO Warszawa), Piotr Nowakowski (Trefl Gdańsk);</p>
                            <p>libero: Kacper Piechocki (PGE Skra Bełchatów), Damian Wojtaszek (ONICO Warszawa), Paweł Zatorski (ZAKSA Kędzierzyn-Koźle), Michał Żurek (Indykpol AZS Olsztyn)</p>
                        </div>
                    </div>
                    <IndexLink to="/news">Wróć do aktualności</IndexLink>
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
                    <p className='par1'>Terminarz pierwszej fazy MŚ 2018 siatkarzy</p>
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
                    <p className='par1'>Terminarz Ligi Światowej 2018 siatkarzy</p>
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
                {name:'Aleksander Śliwka', number:'14', data:"24 maja 1995r. Jawor", height:'196 cm',weight:'83kg', position:'przyjmujący', attack:'342 cm', block:'325cm', club:'Asseco Resovia Rzeszów', img:'images/Aleksander-Śliwka.jpeg'},
                {name:'Paweł Zatorski', number:'17', data:"21 czerwca 1990r. Łódź", height:'184 cm',weight:'73kg', position:'libero', attack:'328 cm', block:'304cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Paweł-Zatorski.jpg'},
                {name:'Rafał Buszek', number:'21', data:"28 kwietnia 1987r. Dębica", height:'196 cm',weight:'81kg', position:'przyjmujący', attack:'348 cm', block:'327cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Rafał-Buszek.jpeg'},
                {name:'Mateusz Bieniek', number:'23', data:"5 kwietnia 1994r. Blachownia", height:'210 cm',weight:'98kg', position:'środkowy', attack:'351 cm', block:'329cm', club:'ZAKSA Kędzierzyn-Koźle', img:'images/Mateusz-Bieniek.jpeg'},
                {name:'Artur Szalpuk', number:'25', data:"20 marca 1995r. Olsztyn", height:'202 cm',weight:'91kg', position:'przyjmujący', attack:'350 cm', block:'335cm', club:'Traefl Gdańsk', img:'images/Artur-Szalpuk.jpg'},
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
                        <Route path='/news/news1' component={News1Extend}/>
                        <Route path='/news/news2' component={News2Extend}/>
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
