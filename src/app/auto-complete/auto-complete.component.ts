import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidationErrorMessageComponent } from '../validation-error-message/validation-error-message.component';
import { IControls } from '../interfaces/Icontrols';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'auto-complete',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    ValidationErrorMessageComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoCompleteComponent implements OnChanges {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @Input() autoCompleteFormControl!: FormControl;
  @Input() control!: IControls;
  @Input() options!: { value: string | number; viewValue: string }[];
  myControl = new FormControl('');
  filteredOptions!: { value: string | number; viewValue: string }[];
  currentSelection!: { value: string | number; viewValue: string; }[];

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['options']?.currentValue) {
      this.filteredOptions = this.options.slice();
    }
    if (changes['autoCompleteFormControl']?.currentValue) {

    }
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options?.filter(o => o.viewValue.toLowerCase().includes(filterValue));
  }

  onInputChange(event: any) {
    let foundOption = this.options.filter((el: { value: string | number; viewValue: string }) => {
      el.viewValue.toLowerCase().includes(event.target.value)
    })
    if (foundOption.length == 0) {
      this.autoCompleteFormControl.setErrors(Validators.required)

    }
  }

  onFocus(formControl: FormControl) {
    if (!this.autoCompleteFormControl.getRawValue()) {

      formControl.patchValue('')
    }
    // console.log('Control is focused');
  }
  onOptionSelected(event: any) {
    console.log('💍', event)
    this.currentSelection = this.options.filter((el: any) => {
      el.viewValue == event.option.value
    })
    console.log('👩‍💻', this.currentSelection)
  }
}
