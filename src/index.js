import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import Login from "./components/Login";
import createStore from "./store/index";
import Search from "./components/Search";
const store = createStore();

const App = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const isUserLoggedIn = isLoggedIn || sessionStorage.getItem('authenticated');
    return isUserLoggedIn ? <Search></Search> : <Login></Login>
}
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById("root"));