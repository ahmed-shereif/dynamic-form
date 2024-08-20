import { ValidatorFn } from '@angular/forms';
import { IValidationError } from './IValidationError';

export enum DataType{
  string="string",
  number="number",
  boolean="boolean",
  object="object"
}

export interface ISelectValue {
  value: string | number;
  viewValue: string
}

export interface IControls {
  id: number;
  dataType: DataType
  controlName: string;
  displayName: string;
  controlType: string;
  isDisable?: boolean;
  isVisable?: boolean;
  placeholder?: string;
  validator: ValidatorFn | null | Array<ValidatorFn>;
  customeErrorMessages?: IValidationError;
  dropDownTemplate?: {
    list: ISelectValue[];
    onSelectChange?: Function;
  };
  autoCompleteTemplate?: {
    list: ISelectValue[];
    onSelectChange?: Function;
  };
  hint?: { text: string, classes?: string },
  styleClasses?: string;
  
}
