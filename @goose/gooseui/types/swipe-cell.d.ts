import { GooseComponent } from './component';

export class SwipeCell extends GooseComponent {
  open(position: 'left' | 'right'): void;

  close(): void;
}
