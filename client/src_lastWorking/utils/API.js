import axios from "axios";

export default {
  // Gets all herbs
  getHerbs: function() {
    return axios.get("/api/herbs");
  },
  // Gets the herb with the given id
  getHerb: function(id) {
    return axios.get("/api/herbs/" + id);
  },
  // Gets the herbs based on search term
  getHerbsByQuery: (query) => {
    return axios.get("/api/herbs/search/" + query);
  },
  // Deletes the herb with the given id
  deleteHerb: function(id) {
    return axios.delete("/api/herbs/" + id);
  },
  // Saves a herb to the database
  saveHerb: function(herbData) {
    return axios.post("/api/herbs", herbData);
  }
};
