export type FiltersTypes = {
    result: ResultFilterTypes | null;
    loading: boolean;
    error: string;
}

export type ResultFilterTypes = {
    schema: {
        attributes: {
            Color:{
                enum: any
            }
        }
    }
}