import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './Angular15/data-binding/data-binding.component';
import { DirectivesComponent } from './Angular15/directives/directives.component';
import { CusPipeComponent } from './Angular15/cus-pipe/cus-pipe.component';
import { CusDirectiveDirective } from './Angular15/cus-directive.directive';
import { CusPipePipe } from './Angular15/cus-pipe.pipe';
import { ApiServicesComponent } from './Angular15/api-services/api-services.component';
import { JsonDataComponent } from './Angular15/json-data/json-data.component';
import { CompAComponent } from './Angular15/comp-a/comp-a.component';
import { CompBComponent } from './Angular15/comp-b/comp-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    CusPipeComponent,
    CusDirectiveDirective,
    CusPipePipe,
    ApiServicesComponent,
    JsonDataComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
