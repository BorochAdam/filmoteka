import React from 'react';
const movies = [{"name":"Kick-Ass","year":"2010","duration":118,"genre":"Action, Comedy","rating":7.7,"votes":416838},{"name":"Kick-Ass 2","year":"2013","duration":103,"genre":"Action, Comedy, Crime","rating":6.6,"votes":191937},{"name":"Kiler","year":"1997","duration":104,"genre":"Action, Comedy, Crime","rating":7.6,"votes":2906},{"name":"Kill Bill vol.1","year":"2003","duration":111,"genre":"Action","rating":8.1,"votes":692205},{"name":"Kill Bill vol.2","year":"2004","duration":137,"genre":"Action, Crime, Thriller","rating":8,"votes":491040},{"name":"King Kong","year":"2005","duration":200,"genre":"Action, Adventure, Drama","rating":7.3,"votes":305349},{"name":"Kingsajz","year":"1987","duration":105},{"name":"Kingsman The Secret Service","year":"2014","duration":128,"genre":"Action, Adventure, Comedy","rating":7.8,"votes":348769},{"name":"Knight and Day 2","year":"2010","duration":110},{"name":"Knight and Day extended","year":"2010","duration":117},{"name":"Knight and Day PL 2","year":"2010","duration":103},{"name":"Knight and Day PL","year":"2010","duration":103},{"name":"Knight and Day","year":"2010","duration":110,"genre":"Action, Comedy, Romance","rating":6.3,"votes":143558},{"name":"Knight Rider 2000","year":"1991","duration":95,"genre":"Action, Adventure, Sci-Fi","rating":4.6,"votes":1891},{"name":"Knight Rider 2010","year":"1994","duration":87,"genre":"Sci-Fi","rating":3.1,"votes":668}];

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        movies.forEach((element)=>{
            console.log(element.name);
            console.log(element.year);
        });
        return(
            <div>
                <h2>
                    Znajdź, co ciekawego możesz obejrzeć dziś wieczorem!
                </h2>

            </div>
        );
    }
}
