import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes : Cliente[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ClienteServ : ClienteService) {
  }

  ionViewDidLoad() {
    this.ClienteServ.listaDeClientes().subscribe(response=>{
      this.clientes = response;
      console.log(this.clientes)
    },error =>{
      console.log('Servidor não disponível');
    })
  }

}
