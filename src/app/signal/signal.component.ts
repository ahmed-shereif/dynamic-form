import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Validator, FormGroup } from '@angular/forms';
// import { DynamicFormsComponent } from './../dynamic-forms/dynamic-forms.component';
import {
  AfterViewInit,
  Component,
  computed,
  model,
  Signal,
  signal,
  ViewChild,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataType, IControls } from '../interfaces/Icontrols';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
import { LookupComponent } from '../multi-select-auto-complete/lookup.component';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { IFormUiStructure } from '../interfaces/IFormUiStructure';

interface Food {
  value: string;
  viewValue: string;
}

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsComponent,
    LookupComponent,
    AutoCompleteComponent,
    HttpClientModule
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent implements AfterViewInit {
  months = [
    { value: 1, viewValue: 'January' },
    { value: 2, viewValue: 'February' },
    { value: 3, viewValue: 'March' },
    { value: 4, viewValue: 'April' },
    { value: 5, viewValue: 'May' },
    { value: 6, viewValue: 'June' },
    { value: 7, viewValue: 'July' },
    { value: 8, viewValue: 'August' },
    { value: 9, viewValue: 'September' },
    { value: 10, viewValue: 'October' },
    { value: 11, viewValue: 'November' },
    { value: 12, viewValue: 'December' }
  ];
  years: any = [];
  @ViewChild('myForm') myForm!: DynamicFormsComponent;
  dropdownTest: any = null;
  controls = signal<IControls[]>([
    {
      id: 2,
      controlName: 'address',
      controlType: 'text',
      validator:
        Validators.maxLength(2),

      displayName: 'المجموع',
      isDisable: false,
      hint: { text: '%', classes: "" },
      dataType: DataType.number,
    },
    {
      id: 233,
      controlName: 'ddddddd',
      controlType: 'text',
      validator:
        Validators.maxLength(2),

      displayName: 'ddddddddd',
      isDisable: false,
      dataType: DataType.string

    },
    {
      id: 29,
      controlName: 'allowanything',
      controlType: 'checkBox',
      validator:
        null,
      displayName: 'allowanything',
      isDisable: false,
      dataType: DataType.boolean

    },
    {
      id: 112,
      controlName: 'dropdownTest',
      controlType: 'select',
      isDisable: false,
      displayName: 'dropdownTest',
      validator: Validators.required,
      dropDownTemplate: {
        list: [
          { value: 0, viewValue: 'Steak' },
          { value: 1, viewValue: 'Pizza' },
          { value: 2, viewValue: 'Tacos' },
        ],
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    },
    {
      id: 66,
      controlName: 'autoComplete',
      controlType: 'autoComplete',
      isDisable: false,
      displayName: 'autoComplete',
      placeholder: "autoComplete",
      validator: Validators.required,
      autoCompleteTemplate: {
        list: [
          { value: 0, viewValue: 'Steak' },
          { value: 1, viewValue: 'Pizza' },
          { value: 2, viewValue: 'Tacos' },
        ],
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    },
    {
      id: 1212,
      controlName: 'dropdown2',
      controlType: 'select',
      isDisable: true,
      displayName: 'dropdownTest',
      validator: Validators.required,
      dropDownTemplate: {
        list: [],
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    },


    {
      id: 23,
      controlName: 'n1',
      controlType: 'number',
      validator: [Validators.required, Validators.min(10)],
      displayName: 'ttt1',
      isDisable: false,
      placeholder: '1',
      dataType: DataType.string

    },

    {
      id: 3,
      controlName: 'ttt1',
      controlType: 'text',
      validator: [Validators.required, Validators.minLength(10)],
      displayName: 'ttt1',
      dataType: DataType.string

    },
    {
      id: 4,
      controlName: 'address11123',
      displayName: 'address1123',
      controlType: 'text',
      validator: null,
      dataType: DataType.string

    },
    {
      id: 5,
      controlName: 'text',
      displayName: 'text',
      controlType: 'text',
      validator: null,
      dataType: DataType.string

    },
    {
      id: 6,
      controlName: 'nationality',
      displayName: 'nationality',
      controlType: 'text',
      validator: null,
      dataType: DataType.string

    },
    {
      id: 7,
      controlName: 'nationality1',
      displayName: 'nationality',
      controlType: 'text',
      validator: null,
      dataType: DataType.string

    },
    {
      id: 229,
      controlName: 'allowanything',
      controlType: 'checkBox',
      validator:
        null,
      displayName: 'allowanything',
      isDisable: false,
      styleClasses: "mt-[-30px]",
      dataType: DataType.string


    },
    {
      id: 8,
      controlName: 'nationality2',
      displayName: 'nationality',
      controlType: 'text',
      validator: null,
      dataType: DataType.string

    },
    {
      id: 9,
      controlName: 'nationality3',
      displayName: 'nationality',
      controlType: 'textarea',

      validator: Validators.compose([Validators.required, Validators.maxLength(2000)]),
      dataType: DataType.string

    },
    {
      id: 67,
      controlName: 'fromMonth',
      controlType: 'autoComplete',
      isDisable: false,
      displayName: 'JoiningDate',
      placeholder: "",
      validator: Validators.required,
      autoCompleteTemplate: {
        list: this.months,
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    }, {
      id: 68,
      controlName: 'fromYear',
      controlType: 'autoComplete',
      isDisable: false,
      displayName: '',
      placeholder: "fromYear",
      validator: Validators.required,
      autoCompleteTemplate: {
        list: this.years,
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    }, {
      id: 69,
      controlName: 'toMonth',
      controlType: 'autoComplete',
      isDisable: false,
      displayName: 'finishDate',
      placeholder: "toMonth",
      validator: Validators.required,
      autoCompleteTemplate: {
        list: this.months,
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    }, {
      id: 70,
      controlName: 'toYear',
      controlType: 'autoComplete',
      isDisable: false,
      displayName: '',
      placeholder: "toYear",
      validator: Validators.required,
      autoCompleteTemplate: {
        list: this.years,
        onSelectChange: (event: MatSelectChange) => {
          console.log('', event);
        },
      },
      dataType: DataType.string

    },


  ]);
  formUiStructure = signal<IFormUiStructure[]>([
    { row: 1, colsNumbers: 2, fields: [], rowDivision: 'md:grid-cols-2', cssClasses: '' },
    { row: 9, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    {
      row: 2,
      colsNumbers: 3,
      fields: [],
      rowDivision: 'md:grid-cols-[40%_40%_15%]', cssClasses: ""
    },
    { row: 3, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 4, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 5, colsNumbers: 3, fields: [], rowDivision: 'md:grid-cols-3', cssClasses: "" },
    { row: 6, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 7, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 8, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 11, colsNumbers: 1, fields: [], rowDivision: 'md:grid-cols-1', cssClasses: "" },
    { row: 12, colsNumbers: 4, fields: [], rowDivision: 'md:grid-cols-4', cssClasses: "" },
  ]);

  constructor(private http: HttpClient) {
    for (let year = 2029; year >= 1960; year--) {
      this.years.push({ value: year, viewValue: year.toString() });
    }

  }

  ngAfterViewInit(): void {
    this.myForm.formGroup
      .get('dropdownTest')
      ?.valueChanges.subscribe((res: any) => {
        if (res == 0) {
          this.controls.update((val: IControls[]) => {
            return val.map((control: IControls) => {
              if (control.controlName === 'dropdown2') {
                return {
                  ...control,
                  dropDownTemplate: {
                    ...control.dropDownTemplate,
                    list: [{ value: 3213, viewValue: 'asdsd' }],
                  },
                };
              }
              return control;
            });
          });
        }
      });
    this.myForm.formGroup.get("address")?.patchValue("hrlllllllllllll")
    this.http.get('assets/formData.json').subscribe(response => {
      console.log(response);
      this.myForm.fetchedData.set(response);
      console.log('🦸‍♀️', this.myForm.fetchedData())
      this.myForm.fillTheFormWithBackEndData()
    });
  }

  getValue() {
    console.log('👮‍♀️', this.myForm.formGroup.value)
    this.myForm.getDirtFormValues()
    console.log('👩‍❤️‍👩', this.myForm.getDirtFormValues())

  }


}
