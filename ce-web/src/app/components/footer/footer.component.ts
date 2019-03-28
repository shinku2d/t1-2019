import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data/data-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastUpdate:Date
  constructor(private dataStorage: DataStorageService) {
    this.lastUpdate=new Date();
   }

  ngOnInit() {
    this.dataStorage.setObjectValue('dato', 'cualquier cosa');
  }

}
