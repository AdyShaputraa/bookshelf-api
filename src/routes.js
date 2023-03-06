const {  getBooksHandler, addBooksHandler, getBooksByIdHandler, updateBooksHandler, deleteBooksHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBooksHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksHandler,
    }
];

module.exports = routes;