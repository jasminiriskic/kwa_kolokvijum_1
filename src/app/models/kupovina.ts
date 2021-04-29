import { Kupac } from "./kupac";
import { Proizvod } from "./proizvod";

export interface Kupovina {
    id: number,
    datumKupovine: Date,
    kolicina: number,
    kupac: Kupac,
    proizvod: Proizvod
}
