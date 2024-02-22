import { useCountdown } from "../../hooks/useCountdown";

export const Timer = ({ startDate }) => {
  const timer = useCountdown(startDate);
  return <div>{timer.join(":")}</div>;
};

Timer.propTypes;
