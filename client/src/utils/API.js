import axios from 'axios';

// API Calls to the server
export default {
	// Gets all books
	getBooks: function() {
		return axios.get('/api/books');
    },
    getAnon: function() {
		return axios.get('/api/anon');
	},
	// Gets the book with the given id
	getBook: function(id) {
		return axios.get('/api/books/' + id);
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete('/api/books/' + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post('/api/books', bookData);
	}
};