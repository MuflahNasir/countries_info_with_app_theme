import axios from "axios";

export const getCountries = async () => {
  try {
    const countries = await axios.get("https://restcountries.com/v2/all");
    return countries;
  } catch (error) {
    console.log(error);
  }
};
