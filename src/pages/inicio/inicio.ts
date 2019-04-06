import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../service/cliente.service';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  listaDeClientes : Cliente [] = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController,
     public clienteServ : ClienteService) {

  }

  ionViewDidLoad() {
    this.menu.enable(true);
    this.listaDeClientes = this.clienteServ.getList();
  }


}
