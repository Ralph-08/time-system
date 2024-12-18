import { useState, useEffect } from "react";
import "./DashboardPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import employeeInfo from "../../data/employee.json";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import axios from "axios";

function DashboardPage({ user }) {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [time, setTime] = useState(false);
  const navigate = useNavigate();

  const getTime = async () => {
    try {
      const data = await axios.get(
        "https://timeapi.io/api/time/current/zone?timeZone=America%2FLos_Angeles"
      );
      setTime(data.data.time);
    } catch (error) {
      console.log(error);
    }
  };

  // getTime();

  const getEmplyeeInfo = async () => {
    try {
      const data = await employeeInfo;
      setEmployee(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) navigate("/sign-in");
    getEmplyeeInfo();

    // *****DELETE!!!******
    getTime();
    // *****DELETE!!!******

  }, []);

  const handleClockIn = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsClockedIn(true);
    }, 3000);
  };

  if (time) console.log(time)

  const handleClockOut = () => {
    console.log("Create function to clock out here---");

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsClockedIn(false);
      setShowMessage(true);
    }, 2000);

    setTimeout(() => {
      setShowMessage(false);
    }, 6500);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="dashboard">
        {employee && (
          <h1 className="dashboard__header">{`Welcome, ${employee.firstName}!`}</h1>
        )}

        {showMessage && (
          <h1 className="dashboard__message">{`Clocked out at ${time}`}</h1>
        )}

        {!isLoading ? (
          <section className="clock">
            <button
              className={!isClockedIn ? "clock__btn" : "clock__btn--active"}
              onClick={!isClockedIn ? handleClockIn : handleClockOut}
            >
              {!isClockedIn
                ? "Clock In"
                : `Clocked in at ${time}`}
            </button>
          </section>
        ) : (
          <section className="loading-clock">
            <section className="loading-clock__border"></section>
            <button className="loading-clock__main">
              {!isClockedIn ? "Clocking In..." : "Clocking Out..."}
            </button>
          </section>
        )}

        {employee && (
          <>
            <h2 className="dashboard__subheader">This Week:</h2>
            <section className="table">
              <ul className="table__list">
                {employee.times.map((day, i) => (
                  <li
                    className={i % 2 !== 0 ? "card" : "card card--gray"}
                    key={i}
                  >
                    <h4 className="card__day">{day.day.toUpperCase()}</h4>
                    <p className="card__time">
                      <b>In |</b> {day.clockIn}
                    </p>
                    <p className="card__time">
                      <b>Out |</b> {day.clockOut}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default DashboardPage;
