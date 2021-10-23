import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import "../App.css";

const Detail = () => {
  const { themeMode } = useSelector((state) => state.themeReducer);
  const history = useHistory();
  const languages = history.location.state.country.languages.map(
    (lan) => lan.name
  );
  const borders = history.location.state.countries.filter((country) =>
    history.location.state.country.borders.includes(country.alpha3Code)
  );
  return (
    <div
      className={`${
        themeMode === "light" ? "background_light" : "background_dark"
      } container`}
    >
      <Button
        startIcon={<i className="fa fa-arrow-left"></i>}
        className={`${
          themeMode === "light"
            ? "element_light text_light"
            : "element_dark text_dark"
        }`}
        variant="contained"
        color="light"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Grid container className="margin_top">
        <Grid lg={6} md={6} sm={12}>
          <img
            src={history.location.state.country.flag}
            alt="flag"
            className="detail_image"
          />
        </Grid>
        <Grid lg={6} md={6} sm={12} className={"detail_container"}>
          <Typography
            variant="h4"
            className={`font_home_title text_left font_family font_bold ${
              themeMode === "light" ? "text_light" : "text_dark"
            }`}
          >
            {history.location.state.country.name}
          </Typography>
          <Grid container className={"sub_detail_container"}>
            <Grid>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Native Name:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.nativeName}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Population:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.population}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Region:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.region}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Sub Region:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.subregion}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Capital:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.capital}
                </span>
              </Typography>
            </Grid>
            <Grid>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Top Level Domain:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.topLevelDomain}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Currencies:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {history.location.state.country.currencies[0].name}
                </span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <span
                  className={`subtitle_title font_family font_home_title ${
                    themeMode === "light" ? "text_light" : "text_dark"
                  }`}
                >
                  Languages:{" "}
                </span>
                <span className={"input_light font_family font_home_title"}>
                  {languages.join(",")}
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Typography gutterBottom variant="body2" className="border">
            <span
              className={`subtitle_title font_family font_home_title ${
                themeMode === "light" ? "text_light" : "text_dark"
              }`}
            >
              Border Countries:{" "}
            </span>
            {borders.map((border) => (
              <Button
                size="small"
                className={`${
                  themeMode === "light"
                    ? "element_light text_light"
                    : "element_dark text_dark"
                } margin_right`}
                variant="contained"
                color="light"
              >
                {border.name}
              </Button>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Detail;
