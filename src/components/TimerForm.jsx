function TimerForm({ minutes, seconds, onMinutesChange, onSecondsChange }) {
  return (
    <div className="timer-form">
      <input type="number" min="0" value={minutes} onChange={onMinutesChange} />
      <span>Minutes</span>

      <input type="number" min="0" value={seconds} onChange={onSecondsChange} />
      <span>Seconds</span>
    </div>
  );
}

export default TimerForm;
