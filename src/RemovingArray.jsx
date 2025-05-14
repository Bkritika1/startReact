import { useState } from "react";

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function RemovingArray(){
    const [artists, setArtists] = useState(
        initialArtists
    );
    function handleChange(idToRemove){
        setArtists(
            artists.filter(artist => artist.id !== idToRemove)
        )
    }
    return(

        <>
        <h1>Inspiring sculptors:</h1>
        <ul>
            {artists.map(artist =>(
               <li key ={artist.id}>
                {artist.name}{''}
                <button onClick={() => handleChange(artist.id)}>Delete</button>
               </li> 
            ))}
        </ul>
        </>
    );
}