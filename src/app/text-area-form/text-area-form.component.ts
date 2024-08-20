import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorMessageComponent } from '../validation-error-message/validation-error-message.component';
import { IControls } from '../interfaces/Icontrols';
import { TranslateService } from '@ngx-translate/core';

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
  providers: [TranslateService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextAreaFormComponent {
  @Input() textAreaFormControl!: FormControl;
  @Input() control!: IControls;
  textLength!: number;
  constructor(
    private translateService: TranslateService,
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['textAreaFormControl']?.currentValue
    ) {
      this.textAreaFormControl.valueChanges.subscribe((res: string) => {
        this.textLength = res.length;
      })

    }
  }

  onFocus(formControl: FormControl) {
    if (this.textAreaFormControl.getRawValue() === "") {
      formControl.patchValue('')
    }

  }
}
