import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  isOpen = signal<number>(0);

  toggleAccordion(index: number) {
    this.isOpen.set(this.isOpen() === index ? 0 : index);
  }
}
