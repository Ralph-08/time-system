import { useState, useEffect } from "react";
import "./DashboardPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import employeeInfo from "../../data/employee.json";

function DashboardPage() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState(false);

  const getEmplyeeInfo = async () => {
    try {
      const data = await employeeInfo;
      setEmployee(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmplyeeInfo();
  }, []);

  const handleClockIn = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsClockedIn(true);
    }, 3000);
  };

  const handleClockOut = () => {
    console.log("Create function to clock out here---");

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsClockedIn(false);
    }, 2000);
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
        {!isLoading ? (
          <section className="clock">
            <button
              className={!isClockedIn ? "clock__btn" : "clock__btn--active"}
              onClick={!isClockedIn ? handleClockIn : handleClockOut}
            >
              {!isClockedIn
                ? "Clock In"
                : `Clocked in at ${new Date().toLocaleTimeString()}`}
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
