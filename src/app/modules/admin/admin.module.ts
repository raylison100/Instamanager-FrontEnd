import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
     FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
})
export class AdminModule { }
