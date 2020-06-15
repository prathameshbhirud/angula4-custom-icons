import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  public userData$: Subscription;
  public userData: any;

  private componentMessage: string;

  constructor( private loginService: LoginService) {

    this.userData$ = this.loginService.userData$.subscribe(
      userData$ => {
        this.userData = userData$;

        this.componentMessage = (this.userData == null)
        ? 'Hello Stranger! This is a very important footer component!'
        : 'Hello ' + this.userData + '! Do you like this footer component?';
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userData$.unsubscribe();
  }

}
