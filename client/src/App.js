import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MobileHome from "./components/MobileHome";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "",
      desktop: 1070,
      tablet: 750,
    };
    let todo;
  }

  componentDidMount() {
    if (window.innerWidth > this.state.desktop) {
      this.setState({ viewType: "desktop" });
    } else {
      this.setState({ viewType: "tablet" });
    }
    window.addEventListener("resize", this.checkWindowType);
  }

  checkWindowType = () => {
    clearTimeout(this.todo);
    this.todo = setTimeout(() => {
      if (window.innerWidth > this.state.desktop) {
        this.setState({ viewType: "desktop" });
      } else {
        this.setState({ viewType: "tablet" });
      }
      window.scrollTo(0, 0);
      window.location.reload();
    }, 250);
  };
  render() {
    const { viewType, tablet } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={(props) =>
                window.innerWidth > tablet ? (
                  <Home {...props} viewType={viewType} />
                ) : (
                  <MobileHome {...props} viewType={viewType} />
                )
              }
            />

            {/* <Route
              path="/"
              render={(props) => <Home {...props} viewType={viewType} />}
            /> */}

            {/* <Route path="/" component={MobileHome} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
