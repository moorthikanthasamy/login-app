import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux"
import apiService from "../store/action";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [formErr, setFormErr] = useState({ usernameErr: false, passwordErr: false });
    const usernameRef = useRef(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    function onClickHandler() {
        const { username, password } = form;
        if (username && password) {
            apiService.Login(dispatch, form)
        }
    }
    function onChangeHandler(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    useEffect(() => {
        usernameRef.current.focus();
    }, []);
    return (
        <form className={classes.root} >
            <TextField type="text" label="Username" variant="outlined" name="username" ref={usernameRef} onChange={onChangeHandler} error={formErr.usernameErr} />
            <TextField type="password" label="Password" variant="outlined" name="password" onChange={onChangeHandler} error={formErr.passwordErr} />
            <Button variant="outlined" color="primary" onClick={onClickHandler}>
                SignIn
            </Button>
        </form>)
}
export default Login;
