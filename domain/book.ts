export interface Book {
    book_id?: string,
    name?: string,
    description?: string,
    category?: string,
    action?: string,
    genre?: string,
    author?: string,
    quantity?: number,
    price?: number,
    discount?: string,
    isAvailable?: boolean,
    iaDiscounted?: boolean,

    imagePath_small?: string,
    imagePath_big?: string,
}
