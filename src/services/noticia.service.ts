import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Noticia } from "../model/noticia";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NoticiaService{
    
    constructor(private http : HttpClient){
    }

    listaDeNoticias() : Observable<Noticia[]> {
        return this.http.get<Noticia[]>('http://www.mocky.io/v2/5ca284633300009800d34040');
    }

}