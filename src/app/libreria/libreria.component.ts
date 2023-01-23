import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent {
  arrayBooks: any[] = [{
    titulo: 'Los mundos de Coraline',
    autor: 'Neil Gaiman',
    portada: 'https://www.tonica.la/__export/1549573946745/sites/debate/img/2019/02/07/coraline-movie_crop1549572734305.jpg_463833556.jpg'
  },{
    titulo: 'El principito',
    autor: 'Antonie de Saint',
    portada: 'https://static.eldiario.es/clip/e78d9792-9e0a-4063-8cd4-b1a6bbd3a7f0_16-9-discover-aspect-ratio_default_0.jpg'
  },{
    titulo: 'Obras Maestras',
    autor: 'Chema Madoz',
    portada: 'https://cdn.shopify.com/s/files/1/0568/2914/9382/products/comprar-libro-chema-madoz-obras-maestras03.jpg?v=1655402749'
  },]

  newBooks(book: any){
    // console.log('nuevo libro añadido', book);
    this.arrayBooks = [...this.arrayBooks, book] 

  }
}
