import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2d8b349aed7093c7a5c0aa3bf4db5029a7cf5fd28853d8bbcd93bd4a7779466c"
  }
});
