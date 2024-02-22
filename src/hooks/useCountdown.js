import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      if (difference <= 0) {
        // Таймер досягнув цільової дати, зупиняємо його
        clearInterval(interval);
        setCountDown(0);
      } else {
        setCountDown(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, countDown]); // Додано countDown до залежностей

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
