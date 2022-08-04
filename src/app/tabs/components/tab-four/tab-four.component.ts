import { Component, OnInit } from '@angular/core';
import { UserList } from '../../models/model';
import { TabService } from '../../services/tab.service';
@Component({
  selector: 'app-tab-four',
  templateUrl: './tab-four.component.html',
  styleUrls: ['./tab-four.component.css']
})
export class TabFourComponent implements OnInit {

  constructor(
    private tabService: TabService
  ) { }

  page: number = 2;
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
