import { Injectable } from "@angular/core";
import {  HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "../models/Pokemon";
import { Global } from "./global";

@Injectable()
export class PokemonService{

    public url : string;

    constructor (private _http:HttpClient){
        this.url = Global.url;
    }
    getPokemonFire():Observable<any>{
        return this._http.get(this.url+'type/10')
    }
    getPokemonWater():Observable<any>{
        return this._http.get(this.url+'type/11')
    }
    getPokemonGrass():Observable<any>{
        return this._http.get(this.url+'type/12')
    }
} 