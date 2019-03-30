import { Injectable } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private noticias: Noticia[] = [
    new Noticia(1, 'Noticia 1', 'https://i.pinimg.com/originals/a2/08/0f/a2080f1f7c22a417b092760b597b45ea.jpg', 'Descripción número 1', new Date(), new Date()),
    new Noticia(2, 'Noticia 2', 'https://i.pinimg.com/originals/0e/c2/94/0ec294ad4fd7c4b65bded87532f6fba0.jpg', 'Descripción número 2', new Date(), new Date()),
    new Noticia(3, 'Noticia 3', 'https://images3.alphacoders.com/568/thumb-1920-568449.png', 'Descripción número 3', new Date(), new Date()),
    new Noticia(4, 'Noticia 4', 'http://hdqwalls.com/wallpapers/zoe-league-of-legends-hd-70.jpg', 'Descripción número 4', new Date(), new Date())
  ];

  constructor() {
    this.verificarExistenciaNoticias();
  }

  verificarExistenciaNoticias(){
    try{
      this.getObjectValue("noticias");
    } catch(ex){
      this.setObjectValue("noticias", this.noticias);
    }
  }

  setObjectValue = (key: string, objectValue: any) => {
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(objectValue));
    } else {
      throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
    }
  }

  getObjectValue = (key: string) => {
    if (window.localStorage) {
      const DATA = JSON.parse(localStorage.getItem(key));
      if (DATA) {
        return DATA;
      } else {
        throw new Error('No se encontró el valor ${key} en el localStorage');
      }
    } else {
      throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
    }
  }
}
