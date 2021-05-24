export type Paginate = {
    paginate: (number: number) => void;
    indexFirstNumberPagination: number;
    setIndexFirstNumberPagination: (typeArrow: number) => void;
};

export type SearchPhotos = {
    searchPhotos: (inputValue: ValueInput, number: number) => Promise<void>;
    numbersPagination: Array<number>;
    totalNumberPhotos: number;
};
export type ValueInput = {
    valueInput: any;
};
