import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorMessageComponent } from '../validation-error-message/validation-error-message.component';
import { IControls } from '../interfaces/Icontrols';

@Component({
  selector: 'text-area-form',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorMessageComponent,
    CommonModule
  ],
  templateUrl: './text-area-form.component.html',
  styleUrl: './text-area-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextAreaFormComponent {
  @Input() textAreaFormControl!: FormControl;
  @Input() control!: IControls;

  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['control']?.currentValue &&
      changes['dropDownFormControl']?.currentValue
    ) {

    }
  }

  onFocus(formControl: FormControl) {
    formControl.patchValue('')
    console.log('Control is focused');
  }
}
