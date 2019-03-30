import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data/data-storage.service';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {
  public listaNoticias: Noticia[];

  constructor(private dataStorage: DataStorageService) { 
    this.listaNoticias = this.dataStorage.getObjectValue("noticias")
  }

  ngOnInit() {
    
  }

}
