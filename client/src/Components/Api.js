import axios from "axios";

const baseURL = "http://localhost:5000/";

export default axios.create({ baseURL: baseURL });

// import axios from "axios";

// const baseURL = "http://localhost:5000/";

// const api = axios.create({ baseURL: baseURL });

// // Example usage with error handling
// api.get("/endpoint")
//   .then(response => {
//     // Handle successful response
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error("Error making API request:", error);
//   });
