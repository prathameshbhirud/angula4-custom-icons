import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userData$: Subscription;
  public userData: any;
  public username: string;
  private componentMessage: string;

  constructor( private loginService: LoginService) {

    this.userData$ = this.loginService.userData$.subscribe(
      userData$ => {
        this.userData = userData$;

        this.componentMessage = (this.userData == null)
        ? 'Hello Stranger! Please click Login'
        : 'Hello there ' + this.userData + '! Welcome Back!!';
      }
    );
  }

  ngOnInit() {
    this.username = null;
  }

  ngOnDestroy() {
    this.userData$.unsubscribe();
  }

  login(username) {
    this.loginService.login(username);
  }

  logout() {
    this.loginService.logout();
    this.username = '';
  }

}
