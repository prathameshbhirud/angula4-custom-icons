import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule, 
  MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { Ic2Component } from './ic2/ic2.component';
import { Ic3Component } from './ic3/ic3.component';
import { Ic4Component } from './ic4/ic4.component';
import { VvComponent } from './vv/vv.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CapitalizePipe } from './capitalize-pipe/capitalize.pipe';
import { TagsDropdownComponent } from './tags-dropdown/tags-dropdown.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { AlphabetPipe } from './alphabet.pipe';
import { AlphaPipe } from './src/pipes/alpha.pipe';
import { OnlyNumberDirective } from './only-number.directive';
import { MinimumAgeDirective } from './directive/minimum-age.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { ObservableService } from './observable.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    Ic2Component,
    Ic3Component,
    Ic4Component,
    VvComponent,
    CustomTableComponent,
    CapitalizePipe,
    TagsDropdownComponent,
    InputCheckboxComponent,
    AlphabetPipe,
    AlphaPipe,
    OnlyNumberDirective,
    MinimumAgeDirective,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ObservableService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
