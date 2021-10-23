import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Grid,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";

import "../App.css";
import { getCountries } from "../services/country.service";

const Home = () => {
  const { themeMode } = useSelector((state) => state.themeReducer);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const history = useHistory();

  useEffect(() => {
    const get_countries = async () => {
      const countries = await getCountries();
      setCountries(countries.data);
    };
    get_countries();
  }, []);

  return (
    <div
      className={`${
        themeMode === "light" ? "background_light" : "background_dark"
      } home_container`}
    >
      <div>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12} md={6}>
            <FormControl>
              <OutlinedInput
                className={`${
                  themeMode === "light" ? "element_light" : "element_dark"
                } input_light search_width`}
                placeholder={"Search"}
                onChange={(event) => {
                  const filterCountries = countries.filter(
                    (country) => country.name === event.target.value
                  );
                  if (filterCountries.length) {
                    setCountries(filterCountries);
                  }
                  if (event.target.value === "") {
                    window.location.reload();
                  }
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <i
                      className={`fa fa-search ${
                        themeMode === "dark" && "input_light"
                      }`}
                    ></i>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            md={6}
            className={`filter_grid ${themeMode === "dark" && "input_light"}`}
          >
            <Select
              className={` ${
                themeMode === "light" ? "element_light" : "element_dark"
              } input_light search_width`}
              value={region}
              onChange={(event) => {
                setRegion(event.target.value);
                const filterCountries = countries.filter(
                  (country) => country.region === event.target.value
                );
                setCountries(filterCountries);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Filter By Region</em>
              </MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"Americas"}>America</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {!countries.length ? (
          <CircularProgress />
        ) : (
          <Grid container className={"margin_top"}>
            {countries.length &&
              countries.map((country) => (
                <Grid lg={3} md={4} sm={12} className={"card_width"}>
                  <Card
                    sx={{ maxWidth: 300 }}
                    className="margin_bottom"
                    onClick={() =>
                      history.push({
                        pathname: "/detail",
                        state: { country: country, countries: countries },
                      })
                    }
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      width="140"
                      image={country.flag}
                      alt="Flag"
                    />
                    <CardContent
                      className={
                        themeMode === "light" ? "element_light" : "element_dark"
                      }
                    >
                      <Typography
                        gutterBottom
                        component="div"
                        className={`font_home_title text-left font_family font_bold ${
                          themeMode === "light" ? "text_light" : "text_dark"
                        }`}
                      >
                        {country.name}
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        <span
                          className={`subtitle_title ${
                            themeMode === "light" ? "text_light" : "text_dark"
                          }`}
                        >
                          Population:{" "}
                        </span>
                        <span className={"input_light"}>
                          {country.population}
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        <span
                          className={`subtitle_title ${
                            themeMode === "light" ? "text_light" : "text_dark"
                          }`}
                        >
                          Region:{" "}
                        </span>
                        <span className={"input_light"}>{country.region}</span>
                      </Typography>
                      <Typography variant="body2">
                        <span
                          className={`subtitle_title ${
                            themeMode === "light" ? "text_light" : "text_dark"
                          }`}
                        >
                          Capital:{" "}
                        </span>
                        <span className={"input_light"}>{country.capital}</span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Home;
