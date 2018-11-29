import React from 'react';


const movies = [
    {"name":"Knight and Day","year":"2010","duration":110,"genre":"Action, Comedy, Romance","rating":6.3,"votes":143558},
    {"name":"Knight Rider 2000","year":"1991","duration":95,"genre":"Action, Adventure, Sci-Fi","rating":4.6,"votes":1891},
    {"name":"Knight Rider 2012","year":"1994","duration":87,"genre":"Sci-Fi","rating":3.1,"votes":668},
    {"name":"American Pie 3 The Wedding","year":"2003","duration":99},{"name":"American Pie 4 Band Camp","year":"2005","duration":91},{"name":"American Pie 5 The Naked Mile","year":"2006","duration":98},{"name":"American Pie 6 Beta House","year":"2007","duration":87},{"name":"American Pie 7 Presents The Book of Love","year":"2009","duration":94},{"name":"American Pie 8 Hole In One","year":"2010","duration":96},{"name":"Angels and Demons","year":"2009","duration":146,"genre":"N/A","rating":4.3,"votes":38},{"name":"The Angriest Man in Brooklyn","year":"2014","duration":84,"genre":"Comedy, Drama","rating":5.7,"votes":15384},{"name":"Hostage","year":"2005","duration":113,"genre":"Action, Crime, Drama","rating":6.6,"votes":91927},{"name":"Hot Pursuit","year":"2015","duration":88,"genre":"Action, Comedy, Crime","rating":5.1,"votes":29095},{"name":"Hot Shots","year":"1991","duration":85,"genre":"Action, Comedy","rating":6.7,"votes":75776},{"name":"Hot Shots Part Deux","year":"1993","duration":85,"genre":"Documentary, Short, Comedy","rating":7.8,"votes":39},{"name":"Hot Tub Time Machine","year":"2010","duration":101,"genre":"Comedy, Sci-Fi","rating":6.4,"votes":135874},{"name":"Hot Tub Time Machine 2","year":"2015","duration":99,"genre":"Comedy, Sci-Fi","rating":5.1,"votes":24523},{"name":"Hotel Transylvania","year":"2012","duration":92,"genre":"Animation, Comedy, Family","rating":7.1,"votes":153013},{"name":"Hotel Transylvania 2","year":"2015","duration":89,"genre":"Animation, Comedy, Family","rating":6.8,"votes":36653},{"name":"How To Train Your Dragon","year":"2010","duration":98,"genre":"Animation, Action, Adventure","rating":8.2,"votes":457234},{"name":"How To Train Your Dragon 2","year":"2014","duration":102,"genre":"Animation, Action, Adventure","rating":7.9,"votes":204443},{"name":"Howard the Duck","year":"1986","duration":110,"genre":"Action, Adventure, Comedy","rating":4.5,"votes":32501},{"name":"Howl's Moving Castle","year":"2004","duration":119,"genre":"Animation, Adventure, Family","rating":8.2,"votes":200366},{"name":"Hudson Hawk","year":"1991","duration":100,"genre":"Action, Adventure, Comedy","rating":5.7,"votes":42166},{"name":"Hugo","year":"2011","duration":126,"genre":"Adventure, Drama, Family","rating":7.6,"votes":236290},{"name":"Hulk","year":"2003","duration":138,"genre":"Action, Sci-Fi","rating":5.7,"votes":204253},{"name":"The Incredible Hulk","year":"2008","duration":112,"genre":"Action, Adventure, Sci-Fi","rating":6.8,"votes":311259},{"name":"Planet Hulk","year":"2010","duration":81,"genre":"Animation, Action, Adventure","rating":6.9,"votes":8181},{"name":"The Hunger Games","year":"2012","duration":143,"genre":"Adventure, Drama, Sci-Fi","rating":7.3,"votes":675743},{"name":"The Hunger Games Catching Fire","year":"2013","duration":146,"genre":"Adventure, Sci-Fi, Thriller","rating":7.6,"votes":475539},{"name":"The Hunger Games Mockingjay 01","year":"2014","duration":123}
];

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whatToSort : "name",
            movies : movies,
            moviesToShow : movies,
            typeOfSort : "asc",
            phraseToSearch: ""
        };
    }

    handleTitleChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        });
    };

    sortByName = (a,b) =>{
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    };

    sortByYear = (a,b) =>{
        return (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0);
    };

    sortByDuration = (a,b) =>{
        return (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0);
    };

    sortByRating = (a,b) =>{
        if (a.rating === undefined) a.rating=0;
        if (b.rating === undefined) b.rating=0;
        return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0);
    };

    sortByVotes = (a,b) =>{
        if (a.votes === undefined) a.votes=0;
        if (b.votes === undefined) b.votes=0;
        return (a.votes > b.votes) ? 1 : ((b.votes > a.votes) ? -1 : 0);
    };

    handleResetButton = (event) =>{
        event.preventDefault();
        this.setState({
            moviesToShow : this.state.movies
        });
    };

    handleSearchClick = (event) =>{
        event.preventDefault();
        console.log(this.state.phraseToSearch);
        let arrayFilteredItems = [];
        for (let i of this.state.moviesToShow){
            //jeśli znajdzie w tekście i.name frazę state.phraseToSearch to ma ją wrzucić do state wyświetlanych filmów, oba są toUpperCase przyrównane, żeby wyeliminować rożnice mała-wielka litera.
            if (i.name.toUpperCase().indexOf(this.state.phraseToSearch.toUpperCase()) >= 0){
                //do nowej tablicy wrzucam elementy i, które pasują do warunku wyszukiwania
                arrayFilteredItems.push(i);
            }
        }
        //tablicę z elementami i z wyszukania podmieniam w state jako elementy do wyświetlenia
       this.setState({
           moviesToShow : arrayFilteredItems
       })
    };

    handleClick = (event) => {
        event.preventDefault();
       let newArray = [...movies];
        if (this.state.whatToSort==="name"){
            newArray.sort(this.sortByName);
        }
        else if (this.state.whatToSort==="year"){
            newArray.sort(this.sortByYear);
        }
        else if (this.state.whatToSort==="duration"){
            newArray.sort(this.sortByDuration);
        }
        else if (this.state.whatToSort==="rating"){
            newArray.sort(this.sortByRating);
        }
        else if (this.state.whatToSort==="votes"){
            newArray.sort(this.sortByVotes);
        }
        if (this.state.typeOfSort==="desc"){
            newArray.reverse();
        }
        this.setState({
            moviesToShow : newArray
        })
    };

    render() {
        const moviesLi = [];
            this.state.moviesToShow.forEach((element, index) => {
                let movieLink="https://www.youtube.com/results?search_query=";
                movieLink=movieLink+element.name+"+"+element.year+"+trailer";
            moviesLi.push(
                <li className="movies" key={index}>
                    {element.name !== undefined && <h3>{element.name}</h3>}
                    <span>rok wydania : {element.year},</span>
                    {element.duration !== undefined && <span>długość (m.) :{element.duration},</span>}
                    {element.genre !== undefined && element.genre !== 'N/A' && <span>gatunek : {element.genre}</span>}
                    {element.rating!== undefined && <span>ocena: {element.rating}</span>}
                    {element.votes !== undefined && <span>ilość głosów: {element.votes}</span>}
                    <span><a target="_blank" href={movieLink}>trailer w Youtube</a></span>
                </li>
            )
        });
        return (
            <div>
                <h2>
                    Znajdź, co ciekawego możesz obejrzeć dziś wieczorem!
                </h2>
                <span>
                    <span>Sortuj według:</span>
                    <select id={"whatToSort"}
                        onChange={this.handleTitleChange}>
                        <option value="name">tytuł</option>
                        <option value="year">rok wydania</option>
                        <option value="duration">długość</option>
                        <option value="rating">ocena</option>
                        <option value="votes">ilość głosów</option>
                    </select>
                    <select id={"typeOfSort"}
                            onChange={this.handleTitleChange}
                    >
                        <option value="asc">rosnąco</option>
                        <option value="desc">malejąco</option>
                    </select>
                    <button onClick={this.handleClick}>Sortuj</button>
                    <button onClick={this.handleResetButton}>Czyszczenie sortowania</button>
                    <input type="text"
                           id={"phraseToSearch"}
                           onChange={this.handleTitleChange}
                    />
                    <button onClick={this.handleSearchClick}>
                        Szukaj
                    </button>
                </span>
                <ul>
                    {moviesLi}
                </ul>
            </div>
        );
    }
}
