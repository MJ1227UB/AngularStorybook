import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
