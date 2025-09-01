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
  items = input.required<Accordion[]>();

  isOpen = signal<number>(0);

  toggleAccordion(index: number) {
    this.isOpen.set(this.isOpen() === index ? 0 : index);
  }
}
