import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IControls } from '../interfaces/Icontrols';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ValidationErrorMessageComponent } from '../validation-error-message/validation-error-message.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'drop-down',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ValidationErrorMessageComponent,
    CommonModule 
  ],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropDownComponent implements OnChanges {
  @Input() control!: IControls;
  @Input() dropDownFormControl!: FormControl;
  @Input() dropDownList!: any[];
  @Output() onSelectionChange = new EventEmitter<any>();
  @Output() onOpen = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @ViewChild("validation") validation!: ValidationErrorMessageComponent
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['control']?.currentValue &&
      changes['dropDownFormControl']?.currentValue
    ) {

    }
  }
  selectionChange(event: any) {
    this.onSelectionChange.emit(event);
  }
  open() {
    this.onOpen.emit(null);
  }
  focus(formControl: FormControl) {
    formControl.patchValue('')

  }
}
