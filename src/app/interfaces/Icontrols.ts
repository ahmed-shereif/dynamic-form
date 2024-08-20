import { ValidatorFn } from '@angular/forms';
import { IValidationError } from './IValidationError';

export interface IControls {
  id: number;
  controlName: string;
  displayName: string;
  controlType: string;
  isDisable?: boolean;
  isVisable?: boolean;
  placeholder?: string;
  validator: ValidatorFn | null | Array<ValidatorFn>;
  customeErrorMessages?: IValidationError;
  dropDownTemplate?: {
    list: { value: string | number; viewValue: string }[];
    onSelectChange?: Function;
  };
  autoCompleteTemplate?: {
    list: { value: string | number; viewValue: string }[];
    onSelectChange?: Function;
  };
  hint?: { text: string, classes?: string },
  styleClasses?:string;
}
