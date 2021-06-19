import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: User[] = []
  userNotifier: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  async setUser(user: User): Promise<void>{
    this.user = this.user.concat(user);

    return new Promise((resolve) => {
      setTimeout(() => {
        this.userNotifier.next(true);
        resolve();
      }, 3000);
    })
  }
}
