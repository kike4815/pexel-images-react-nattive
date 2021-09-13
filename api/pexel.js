import axios from "axios";

export const getImages = async (searchTerm = "programming") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: "563492ad6f91700001000001a50a88b169414f23997c51b91ce7e946",
    },
  });
