

export interface Iproduct{
    pName : string,
    pDescription: string,
    pCatg : ProductCatg
}

export enum ProductCatg{
    PRODUCT = 'product',
    CATLOG = 'catlog'
}