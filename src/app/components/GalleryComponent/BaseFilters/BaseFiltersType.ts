import { Params } from "../../../models/Params";

export interface BaseFiltersType {
    handleChange: (filterName: keyof Params, value: any ) => void;
    disabled: boolean 
}