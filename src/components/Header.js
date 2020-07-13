import React from "react";
import { useDispatch } from "react-redux"
import apiService from "../store/action";
import Button from '@material-ui/core/Button';

function Header() {
    const dispatch = useDispatch();
    function onClickHandler() {
        apiService.Logout(dispatch);
    }
    return <Button variant="outlined" color="primary" onClick={onClickHandler}>Logout</Button>
}
export default Header;
