import { GooseComponent } from './component';

export class Calendar extends GooseComponent {
  reset(date?: Date | Date[]): void;

  scrollToDate(date: Date): void;
}
