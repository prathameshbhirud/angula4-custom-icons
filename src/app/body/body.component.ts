import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  public userData$: Subscription;
  public userData: any;

  private componentMessage: string;

  constructor(private loginService: LoginService) {
    this.userData$ = this.loginService.userData$.subscribe(
      (userData$) => {
        this.userData = userData$;
        this.componentMessage = (this.userData == null)
          ? 'Check out this cool body component stranger!'
          : 'Hey ' + this.userData + '! This is still a very cool body component';
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userData$.unsubscribe();
  }
}
