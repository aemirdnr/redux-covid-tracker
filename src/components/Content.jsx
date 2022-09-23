import Styles from "../styles.module.sass";
import Graph from "./Graph.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovid, getCountries, changeCountry } from "../redux/dataSlice";
import { useEffect } from "react";

function Content() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid.data);
  const status = useSelector((state) => state.covid.status);
  const country = useSelector((state) => state.covid.country);
  const countries = useSelector((state) => state.covid.countries);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovid(country));
    }
    dispatch(getCountries());
  }, [dispatch, status, country]);

  return status === "succeeded" ? (
    <>
      <div>
        <select
          className="mt-3"
          style={{
            outline: "none",
            padding: "6px",
            border: "solid 1px #000",
            backgroundColor: "transparent",
            boxShadow: "4px 4px 0px #000",
          }}
          onChange={(e) => dispatch(changeCountry(e.target.value))}
        >
          <option value={country}>{country}</option>
          {countries.map((data, index) => (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-12 col-md-6">
          <div
            className={
              Styles.covid_card +
              " " +
              Styles.infected +
              " d-flex flex-column justify-content-between text-start"
            }
          >
            <b>Infected</b>
            <h5>
              <span>{covidData.confirmed.value.toLocaleString()}</span>
            </h5>
            <p>
              Last update at:{" "}
              {new Date(covidData.lastUpdate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className={
              Styles.covid_card +
              " " +
              Styles.deaths +
              " d-flex flex-column justify-content-between text-start"
            }
          >
            <b>Deaths</b>
            <h5>
              <span>{covidData.deaths.value.toLocaleString()}</span>
            </h5>
            <p>
              Last update at:{" "}
              {new Date(covidData.lastUpdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <Graph />
    </>
  ) : (
    <h1 className="mt-2">Loading...</h1>
  );
}

export default Content;
