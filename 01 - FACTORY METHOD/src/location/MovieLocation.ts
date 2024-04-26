import Location from "./Location";
import Movie from "./item/Movie";
import IItem from "./item/interfaces/IItem";

export default class MovieLocation extends Location{

    protected createItem(): IItem {
        return new Movie();
    }

}