function CountdownDisplay({ timeLeft }) {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <h1 className="countdown-display">
      {mins}:{secs}
    </h1>
  );
}

export default CountdownDisplay;
