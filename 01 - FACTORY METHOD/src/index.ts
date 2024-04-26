import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";

declare var process;

let location: Location;

if(process.argv.includes("game")){
    location = new GameLocation();

}
else if(process.argv.includes("movie")){
    location = new MovieLocation();
}
else{
    console.log("Selecione o tipo do item.");
}

if(location) location.startItem();