import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { changeTheme } from "./feature/themeSlice";
import { Home, Detail } from "./pages";

const App = () => {
  const { themeMode, themeText } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  return (
    <div className={"font_family"}>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            color={themeMode === "light" ? "light" : "dark"}
          >
            <Toolbar>
              <Typography
                className={`font_family font_bold ${
                  themeMode === "light" ? "text_light" : "text_dark"
                }`}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Where in the world?
              </Typography>
              <div
                className={`cursor ${
                  themeMode === "light" ? "text_light" : "text_dark"
                }`}
                color="inherit"
                onClick={() =>
                  dispatch(
                    changeTheme({
                      text:
                        themeText === "Dark Mode" ? "Light Mode" : "Dark Mode",
                      mode: themeMode === "light" ? "dark" : "light",
                    })
                  )
                }
              >
                {themeMode === "light" ? (
                  <i className="fa fa-moon-o"></i>
                ) : (
                  <i className="fa fa-sun-o"></i>
                )}{" "}
                {themeText}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
