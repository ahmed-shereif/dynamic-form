import { WritableSignal } from "@angular/core";
import { IControls } from "../interfaces/Icontrols";

export function updateDropDownList(controls: WritableSignal<IControls[]>, controlName: string, newList: any[]) {
    controls.update((val: IControls[]) => {
        return val.map((control: IControls) => {
            if (control.controlName === controlName) {
                return {
                    ...control,
                    dropDownTemplate: {
                        ...control.dropDownTemplate,
                        list: newList,
                    },
                };
            }
            return control;
        });
    });
}
export function updateAutoCompleteList(controls: WritableSignal<IControls[]>, controlName: string, newList: any[]) {
    controls.update((val: IControls[]) => {
        return val.map((control: IControls) => {
            if (control.controlName === controlName) {
                return {
                    ...control,
                    autoCompleteTemplate: {
                        ...control.autoCompleteTemplate,
                        list: newList,
                    },
                };
            }
            return control;
        });
    });
}