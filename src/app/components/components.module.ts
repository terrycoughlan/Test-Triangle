import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { DashCalenComponent } from './calendar/calendar.component';

import { EventService } from './calendar/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashCalenComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashCalenComponent
  ],
  providers: [ EventService ]
})
export class ComponentsModule { }
