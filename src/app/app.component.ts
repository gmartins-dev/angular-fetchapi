import { Component, OnInit } from '@angular/core';
import { TableService } from './services/table.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  table!: any;

  ngOnInit(): void{
    this.table = this.tableService.getTable();
  }

  constructor(private tableService:TableService){}
}
