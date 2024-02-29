import React from "react";

const Timer = ({ time, startTimer, stopTimer, restartTimer, gameOver }) => {
  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);

  return (
    <div className="timer">
      <span id="timer">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
      {!gameOver ? (
        <div className="timer__btns">
          <button id="timerStart" onClick={startTimer}>
            Запустить
          </button>
          <button id="timerStop" onClick={stopTimer}>
            Остановить
          </button>
          <button id="timerRestart" onClick={restartTimer}>
            Перезапустить
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Timer;
