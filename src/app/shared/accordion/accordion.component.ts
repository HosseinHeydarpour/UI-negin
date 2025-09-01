import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Accordion } from '../models/accordion.model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  /**
   * Input property that provides the list of accordion items.
   *
   * @remarks
   * Each item should follow the {@link Accordion} interface, containing
   * a title, content, and optional icon.
   *
   * @example
   * ```ts
   * <app-accordion [items]="[
   *   { title: 'Overview', content: 'This is the overview section', icon: 'icon-info' },
   *   { title: 'Details', content: 'Here are more details', icon: 'icon-list' }
   * ]"></app-accordion>
   * ```
   */
  items = input.required<Accordion[]>();

  /**
   * Signal representing the index of the currently open accordion item.
   *
   * @default 0
   * A value of `0` means the first accordion item is expanded by default.
   */
  isOpen = signal<number>(0);

  /**
   * Toggles the open/closed state of an accordion item by its index.
   *
   * @param index - The index of the accordion item to toggle
   *
   * @remarks
   * - If the clicked item is already open, it will collapse (reset to `0`).
   * - Otherwise, the clicked item becomes the active one.
   *
   * @example
   * ```ts
   * // Expands the second item
   * accordion.toggleAccordion(1);
   *
   * // Collapses it (since it's already open)
   * accordion.toggleAccordion(1);
   * ```
   */
  toggleAccordion(index: number) {
    this.isOpen.set(this.isOpen() === index ? 0 : index);
  }
}
