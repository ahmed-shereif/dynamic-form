import { IControls } from "./Icontrols";

export interface IFormUiStructure{
    row:number
    colsNumbers:number;
    fields:IControls[],
    rowDivision:string,
    cssClasses?:string
}