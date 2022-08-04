import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { UserList } from '../../models/model';
import { EmployeeData } from '../../models/Tablethree';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  constructor(
    private tabService: TabService
  ) { }

  page: number = 1;
  userList!: UserList;
  employeeList!: EmployeeData;

  ngOnInit(): void {
    this.getEmployeeList()
  }  
  getEmployeeList(){
    this.tabService.getEmployeeData(this.page)
      .pipe()
      .subscribe((employeeList) => {
        this.employeeList = employeeList;
      })
  }

}
