import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../core/menu.service';
import { Menu} from './menu'

@Component({
  selector: 'home-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  public rowData : Menu[];

  constructor(menuService: MenuService) { 
    this.rowData = JSON.parse(menuService.getMenuData());
  }

  columnDefs = [
    {headerName: 'Meal', field: 'meal'},
    {headerName: 'Ingredients', field: 'ingredients', width: 400},
    {headerName: 'Calorie', field: 'calorie'}
  ];

  ngOnInit() {
  }

}
