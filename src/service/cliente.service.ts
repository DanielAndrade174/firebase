import { Cliente } from "../model/cliente";
import firebase from "firebase";
import { Injectable } from "@angular/core";


export class ClienteService{

    firestore = firebase.firestore();
    settings = {timestampsInSnapshots: true};
   

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Cliente[]{

        let listaDeClientes : Cliente [] = [];

        var ref = this.firestore.collection("cliente");
    
        ref.get().then(query => {
          query.forEach(doc => {
            let c = new Cliente ();
            c.setDados(doc.data());
            listaDeClientes.push(c);
          });
        });

        return listaDeClientes;
      }
}