// InputSearch.jsx
// Encapsulation of Autocomplete component of Material-UI

// External dependencies
import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// Internal dependencies
import { changeCity } from "store/thunks/changeCity";
import cities from "assets/city.list.json";

const InputSearch = () => {
  const dispatch = useDispatch();

  const handleCityChange = (_, value) => {
    if (!value) return;
    dispatch(changeCity(value));
  };

  return (
    <div style={{ width: "45%" }}>
      <Autocomplete
        freeSolo
        onChange={handleCityChange}
        options={cities}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            variant="outlined"
            style={{ background: "white" }}
          />
        )}
      />
    </div>
  );
};

export default InputSearch;
