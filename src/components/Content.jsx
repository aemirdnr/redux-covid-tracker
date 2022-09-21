import Styles from "../styles.module.sass";

function Content() {
  return (
    <div className="row mt-2">
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={
            Styles.covid_card +
            " d-flex flex-column justify-content-between text-start"
          }
        >
          <b>Infected</b>
          <h5>
            <span>Count</span>
          </h5>
          <p>Last update at: Wed Sep 21 2022 06:22:58</p>
          <span>
            Number of <b>infect</b> cases of COVID-19
          </span>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={
            Styles.covid_card +
            " d-flex flex-column justify-content-between text-start"
          }
        >
          <b>Recovered</b>
          <h5>
            <span>Count</span>
          </h5>
          <p>Last update at: Wed Sep 21 2022 06:22:58</p>
          <span>
            Number of <b>recoveries</b> from COVID-19
          </span>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={
            Styles.covid_card +
            " d-flex flex-column justify-content-between text-start"
          }
        >
          <b>Deaths</b>
          <h5>
            <span>Count</span>
          </h5>
          <p>Last update at: Wed Sep 21 2022 06:22:58</p>
          <span>
            Number of <b>deaths</b> caused by COVID-19
          </span>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={
            Styles.covid_card +
            " d-flex flex-column justify-content-between text-start"
          }
        >
          <b>Active</b>
          <h5>
            <span>Count</span>
          </h5>
          <p>Last update at: Wed Sep 21 2022 06:22:58</p>
          <span>
            Number of <b>active</b> cases of COVID-19
          </span>
        </div>
      </div>
    </div>
  );
}

export default Content;
