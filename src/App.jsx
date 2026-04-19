import { useEffect, useState } from "react";
import TimerForm from "./components/TimerForm";
import TimerControls from "./components/TimerControls";
import CountdownDisplay from "./components/CountdownDisplay";

function App() {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleMinutesChange(event) {
    setMinutes(event.target.value);
  }

  function handleSecondsChange(event) {
    setSeconds(event.target.value);
  }

  function handleStart() {
    const mins = Number(minutes) || 0;
    const secs = Number(seconds) || 0;

    const totalSeconds = mins * 60 + secs;

    if (totalSeconds <= 0) return;

    setTimeLeft(totalSeconds);
    setInitialTime(totalSeconds);
    setIsRunning(true);
  }

  function handlePauseResume() {
    if (timeLeft <= 0) return;
    setIsRunning((prev) => !prev);
  }

  function handleReset() {
    setTimeLeft(initialTime);
    setIsRunning(false);
  }

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          setIsRunning(false);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  return (
    <div className="app-container">
      <div className="timer-card">
        <h2>Timer</h2>

        <TimerForm
          minutes={minutes}
          seconds={seconds}
          onMinutesChange={handleMinutesChange}
          onSecondsChange={handleSecondsChange}
        />

        <TimerControls
          onStart={handleStart}
          onPauseResume={handlePauseResume}
          onReset={handleReset}
        />

        <CountdownDisplay timeLeft={timeLeft} />
      </div>
    </div>
  );
}

export default App;
