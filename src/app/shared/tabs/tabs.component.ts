import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styles: [
  ]
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[] = [];
  @Output() onSelectTab = new EventEmitter<string>();
  selectedTab: string = '';

  ngOnInit() {
    this.selectedTab = this.tabs[0];
    this.onSelectTab.emit(this.selectedTab);
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
    this.onSelectTab.emit(tab);
  }
}
