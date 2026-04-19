function TimerControls({ onStart, onPauseResume, onReset }) {
  return (
    <div className="button-group">
      <button onClick={onStart}>START</button>
      <button onClick={onPauseResume}>PAUSE/RESUME</button>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}

export default TimerControls;
