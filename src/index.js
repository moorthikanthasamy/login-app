import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import Login from "./components/Login";
import createStore from "./store/index";
import Header from "./components/Header";
const store = createStore();

const App = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const isUserLoggedIn = isLoggedIn || localStorage.getItem('authenticated');
    return isUserLoggedIn ? <Header></Header> : <Login></Login>
}
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById("root"));