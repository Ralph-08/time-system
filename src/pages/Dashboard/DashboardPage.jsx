import { useState } from "react";
import "./DashboardPage.scss";
import NavBar from "../../components/NavBar/NavBar";

function DashboardPage() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      <main>
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
            <button className="loading-clock__main">Please Wait...</button>
          </section>
        )}
      </main>
    </>
  );
}

export default DashboardPage;
