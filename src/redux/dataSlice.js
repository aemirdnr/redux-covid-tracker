import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//
export const fetchCovid = createAsyncThunk(
  "covidData/getData",
  async (country) => {
    if (country === "Global") {
      const res = await axios(`https://covid19.mathdro.id/api/`);
      return res.data;
    } else {
      const res = await axios(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      return res.data;
    }
  }
);

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const res = await axios(`https://covid19.mathdro.id/api/countries`);
    return res.data.countries;
  }
);

export const dataSlice = createSlice({
  name: "covid",
  initialState: {
    data: "",
    country: "Global",
    countries: ["Global"],
    status: "idle",
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
      state.status = "idle";
    },
  },
  extraReducers: {
    [fetchCovid.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCovid.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    [fetchCovid.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { changeCountry } = dataSlice.actions;
