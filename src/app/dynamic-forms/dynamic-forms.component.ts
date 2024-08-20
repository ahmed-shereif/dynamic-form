import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,

  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { IControls } from '../interfaces/Icontrols';
import { ValidationErrorMessageComponent } from '../validation-error-message/validation-error-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
import { TextAreaFormComponent } from '../text-area-form/text-area-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  imports: [
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    DropDownComponent,
    ValidationErrorMessageComponent,
    MatFormFieldModule,
    AutoCompleteComponent,
    TextAreaFormComponent,
    MatCheckboxModule,
    MatIconModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormsComponent implements OnInit, OnChanges {
  formGroup!: FormGroup;
  renderForm = signal<any[]>([]);
  @Input() controls!: IControls[];
  @Input() formUiStructure!: any[];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['controls']?.currentValue &&
      changes['formUiStructure']?.currentValue
    ) {
      this.buildRenderForm(this.controls, this.formUiStructure);

      this.formGroup = this.fb.group({});
      this.controls.forEach((control: IControls) => {
        const validators = control.validator ? control.validator : [];
        this.formGroup.addControl(
          control.controlName,
          this.fb.control({ value: '', disabled: control?.isDisable ?? false }, validators)
        );
      });
    }

    if (changes['controls']?.currentValue) {
      this.buildRenderForm(this.controls, this.formUiStructure);

    }
  }

  buildRenderForm(controls: IControls[], formUiStructure: any[]): void {
    const form: any[] = [];
    let controlIndex = 0;

    formUiStructure.forEach((item) => {
      const { colsNumbers, rowDivision, row, cssClasses } = item;
      const fields: any[] = [];

      for (let i = 0; i < colsNumbers; i++) {
        if (controlIndex < controls.length) {
          fields.push(controls[controlIndex]);
          controlIndex++;
        } else {
          break; // No more controls to assign
        }
      }
      form.push({ fields, colsNumbers, rowDivision, row, cssClasses });
    });

    this.renderForm.set(form);
  }
  onSubmit() {

    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  public asFormControl(
    formControl: AbstractControl<any, any> | null
  ): FormControl {
    return formControl as FormControl;
  }

  onFocus(formControl: FormControl) {
    formControl.patchValue('')
    console.log('Control is focused');
  }
}
