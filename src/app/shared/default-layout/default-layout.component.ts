import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  @Input() title: string = '';
  showWorkshopMenu: boolean = false;

  toggleWorkshopMenu() {
    this.showWorkshopMenu = !this.showWorkshopMenu;
  }
}
