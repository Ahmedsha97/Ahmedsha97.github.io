import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from 'src/app/core/services/base-data.service';
import { UserList } from '../models/model';
import { NewUserList } from '../models/setmodel';
import { EmployeeData } from '../models/Tablethree';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private apiUserUrl = 'api/';

  constructor(
    private baseDataService: BaseDataService
    ) { }


  getUserList(page: number): Observable<UserList>{
    let queryString = `page=${page}`
    return this.baseDataService.makeGetCall(`${this.apiUserUrl}users?${queryString}`,);
  }
  getNewUserList(page: number): Observable<NewUserList>{
    let queryString = `page=${page}`
    return this.baseDataService.makeGetCall(`${this.apiUserUrl}unkown?${queryString}`,);
  }
  getEmployeeData(page: number): Observable<EmployeeData>{
    let queryString = `page=${page}`
    return this.baseDataService.makeGetCall(`${this.apiUserUrl}users?delay${queryString}`,);
  }
}
