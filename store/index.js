export const state = () => ({
    bookList: []
});

export const mutations = {
    books(state, books) {
        state.bookList.push(books);
    },

    clear(state) {
        state.bookList = [];
    },

    removeFromCart(state, books) {
        state.bookList = state.bookList.filter(item => item.book_id !== books.book_id)
    }
}