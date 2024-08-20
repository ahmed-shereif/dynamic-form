import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, Input, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IControls } from '../interfaces/Icontrols';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { IValidationError } from '../interfaces/IValidationError';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'validation-error-message',
  standalone: true,
  providers: [TranslateService],
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, CommonModule, MatIconModule],
  templateUrl: './validation-error-message.component.html',
  styleUrl: './validation-error-message.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ValidationErrorMessageComponent {
  @Input() validationFormControl!: FormControl
  @Input() control!: IControls
  @Input() customeErrorMessages!: IValidationError
  errorMessage = signal<string | null>('')
  constructor(
    private translateService: TranslateService,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['validationFormControl']?.currentValue
    ) {
      this.subscribeToFormControlChange()

    }

  }

  subscribeToFormControlChange() {
    this.validationFormControl.valueChanges.subscribe(res => {
      this.errorMessage.set(this.getErrorMessage(this.validationFormControl))

    })
  }

  getErrorMessage(formControl: any): string | null {

    const displayName = this.translateService?.instant(this.control.displayName || this.control.controlName);
    if (formControl && formControl.invalid) {
      switch (true) {
        case formControl.errors?.['required'] != null:
          return this.customeErrorMessages?.required ? this.customeErrorMessages?.required : `${displayName} ${this.translateService.instant('isRequired')}`;

        case formControl.errors?.['email'] != null:
          return this.translateService.instant('invalidEmailAddress');

        case formControl.errors?.['pattern'] != null:
          return `${displayName} ${this.translateService.instant('isNotInCorrectFormat')}`;

        case formControl.errors?.['noWhiteSpace'] != null && !formControl.errors?.['pattern']:
          return `${displayName} ${this.translateService.instant('cannotBeEmptyOrWhitespace')}`;

        case formControl.errors?.['max'] != null:
          return `${displayName} ${this.translateService.instant('mustBeLessThanOrEqualTo')} ${formControl.errors['max']['max']}`;

        case formControl.errors?.['min'] != null:
          return `${displayName} ${this.translateService.instant('mustBeAtLeast')} ${formControl.errors['min']['min']}`;

        case formControl.errors?.['maxlength'] != null:
          return `${displayName} ${this.translateService.instant('cannotExceed')} ${formControl.errors['maxlength']['requiredLength']} ${this.translateService.instant('characters')}`;

        case formControl.errors?.['whitespace'] != null && !formControl.errors?.['required']:
          return `${displayName} ${this.translateService.instant('cannotBeEmptyOrWhitespace')}`;

        case formControl.errors?.['mask'] != null:
          return `${this.translateService.instant('invalid')} ${displayName} ${this.translateService.instant('length')}`;

        default:
          return null; // No error message
      }
    }
    return null; // No error message
  }

}



