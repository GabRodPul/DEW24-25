// Google sucks, types won't work
// import {} from 'google.maps';
import { Place } from "./types";
const API_URL = "https://places.googleapis.com/v1/places:searchText";

type PlacesRes = { places: Place[] }

const form = document.querySelector( "body" )!
                     .appendChild( document.createElement( "form" ) );

const list = document.querySelector( "body" )!
                     .appendChild( document.createElement( "ul" ) );

const input = form.appendChild( document.createElement( "input" ) );
input.type  = "text";

const button = form.appendChild( document.createElement( "button" ) );
button.textContent = "Search";
button.addEventListener( "click", (e) => {
    e.preventDefault();
    const textQuery = input.value?.trim() ?? "";

    if ( textQuery == "" ) alert( "Invalid query" );

    fetch( API_URL, { 
        method: "POST",
        body:   JSON.stringify({ textQuery, key: "EMPTY" })
    })
    .then( res => res.json() )
    .then( res => (res.places! as PlacesRes).places.forEach( p => {
        list.appendChild( document.createElement( "li" ) )
            .textContent = p.name!;
    }))
    .catch( e => alert( `Failed to fetch Places: ${e}` ) );
});