import { Component, input } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/index';

export interface Tab {
  title: string;
  content: string;
  icon: string;
}

@Component({
  selector: 'app-tabbed-content',
  standalone: true,
  imports: [],
  templateUrl: './tabbed-content.component.html',
  styleUrl: './tabbed-content.component.scss',
})
export class TabbedContentComponent {
  tabs = input.required<Tab[]>();

  activeTab = 0;
}
