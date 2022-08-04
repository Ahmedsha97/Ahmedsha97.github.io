import { Component, OnInit } from '@angular/core';
import { UserList } from '../../models/model';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  constructor(
    private tabService: TabService
  ) { }

  page: number = 1;
  userList!: UserList;

  ngOnInit(): void {
    this.getUserList()
  }


  getUserList(){
    this.tabService.getUserList(this.page)
      .pipe()
      .subscribe((userList) => {
        this.userList = userList;
      })
  }

}
