import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import apiService from "../store/action";
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    const [open, setOpen] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const results = useSelector(state => state.searchResults);
    const loading = open && results.length === 0;
    const dispatch = useDispatch();
    function onChangeHandler(event, value) {
        apiService.Search(dispatch, value)
    }

    return <React.Fragment>
        <Autocomplete
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => {
                if (option.name === value.name) {
                    setShowDetail(true)
                }
            }}
            getOptionLabel={(option) => option.name}
            options={results}
            loading={loading}
            onInputChange={onChangeHandler}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="primary" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
        {showDetail ?
            <React.Fragment>
                <div>Name: {results[0].name}</div>
                <div>Height: {results[0].height}</div>
                <div>Mass: {results[0].mass}</div>
                <div>Hair_color: {results[0].hair_color}</div>
                <div>Skin_color: {results[0].skin_color}</div>
                <div>Eye_color: {results[0].eye_color}</div>
                <div>Birth_year: {results[0].birth_year}</div>
                <div>Gender: {results[0].gender}</div>
                <div>Homeworld: {results[0].homeworld}</div>
            </React.Fragment>
            : null}
    </React.Fragment>;
}
export default Search;