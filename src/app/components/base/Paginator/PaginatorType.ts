export interface PaginatorType {
    handlePrev: () => void;
    handleNext: () => void;
    current: number;
    disabled: boolean
}