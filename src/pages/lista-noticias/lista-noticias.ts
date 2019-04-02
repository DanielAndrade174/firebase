import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../model/noticia';

@IonicPage()
@Component({
  selector: 'page-lista-noticias',
  templateUrl: 'lista-noticias.html',
})
export class ListaNoticiasPage {

  noticias : Noticia[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public NoticiaServ: NoticiaService) {
  }

  ionViewDidLoad() {
    this.NoticiaServ.listaDeNoticias().subscribe(response=>{
      this.noticias = response;
      console.log(this.noticias)
    },error =>{
      console.log('Servidor não disponível');
    })
  }

}