import axios from "axios";

export default {
  // Gets all records from one collection
  getAllFromCollection: function(collectionName) {
    return axios.get(`/api/${collectionName}/`);
  },

  getUser: function(userId){
    return axios.get(`/api/users/${userId}/`)
  },

  getUserArtwork: function(userId){
    return axios.get(`/api/users/${userId}/artworks`)
  },
  //GET 
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getCurrentUser: function(){
    return axios.get(
      '/api/auth/me',
      {
        validateStatus: ( status ) => {
          return ( status >= 200 && status < 300 )
            || status === 401
        }
      }
    );
  },
  login: function( pEmail, pPassword ){
    return axios.post(
      '/api/auth/login',
      {
        email: pEmail,
        password: pPassword   
      }
    );
  },
  logout: function(){
    return axios.get( '/api/auth/logout' )
  }, 
  updateUser: function( pUserId, pUserDetails ){
    return axios.put(
      `/api/users/${ pUserId }/`,
      pUserDetails
    );
  } 
};
