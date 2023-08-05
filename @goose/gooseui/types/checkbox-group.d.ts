import { GooseComponent } from './component';

export type ToggleAllOptions = {
  checked?: boolean;
  skipDisabled?: boolean;
};

export class CheckboxGroup extends GooseComponent {
  toggleAll(options?: boolean | ToggleAllOptions): void;
}
