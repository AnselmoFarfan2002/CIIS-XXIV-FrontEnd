import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function Crono(props) {
  const getTimeRemaining = (e) => {
    const total = e - new Date();
    let days = total / (1000 * 60 * 60 * 24);
    const hours = (days % 1) * 24;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;

    return {
      total: Math.floor(total),
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    };
  };

  function getClock({ total, days, hours, minutes, seconds }) {
    if (total > 0) {
      return (
        (days > 9 ? days : "0" + days) +
        " : " +
        (hours > 9 ? hours : "0" + hours) +
        " : " +
        (minutes > 9 ? minutes : "0" + minutes) +
        " : " +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      return "00 : 00 : 00 : 00";
    }
  }

  const Ref = useRef(null);
  const [timer, setTimer] = useState(null);

  const startTimer = (e) => {
    setTimer(getClock(getTimeRemaining(e)));
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date(props.date);
    return deadline;
  };

  useEffect(() => {
    const remainingTime = getTimeRemaining(getDeadTime());
    setTimer(getClock(remainingTime));
    clearTimer(getDeadTime());
  }, []);

  return <div>{timer}</div>;
}

Crono.defaultProps = {
  date: "11-13-2023",
};

Crono.propTypes = {
  date: PropTypes.string,
};
