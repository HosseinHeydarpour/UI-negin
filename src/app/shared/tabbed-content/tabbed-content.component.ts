import { Component, input } from '@angular/core';

/**
 * Represents a single tab item in the tabbed content component.
 */
export interface Tab {
  /** The title displayed on the tab header */
  title: string;

  /** The content shown when the tab is active */
  content: string;

  /** The CSS class or icon name used for the tab icon */
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
  /**
   * Input property that provides the list of tabs to be displayed.
   *
   * @remarks
   * Each tab should include a title, content, and icon.
   *
   * @example
   * ```ts
   * <app-tabbed-content [tabs]="[
   *   { title: 'Home', content: 'Welcome to Home', icon: 'icon-home' },
   *   { title: 'Profile', content: 'User profile info', icon: 'icon-user' }
   * ]">
   * </app-tabbed-content>
   * ```
   */
  tabs = input.required<Tab[]>();

  /**
   * Index of the currently active tab.
   *
   * @default 0
   */
  activeTab = 0;
}
