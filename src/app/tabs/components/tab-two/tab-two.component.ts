import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { UserList } from '../../models/model';
import { NewUserList } from '../../models/setmodel';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

 
  constructor(
    private tabService: TabService
  ) { }

  page: number = 1;
  userList!: UserList;
  newUserList!: NewUserList;

  ngOnInit(): void {
    this.getNewUserList()
  }


  getNewUserList(){
    this.tabService.getNewUserList(this.page)
      .pipe()
      .subscribe((newUserList) => {
        this.newUserList = newUserList;
      })
  }

}