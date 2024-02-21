import { useCountdown } from "../../hooks/useCountdown";

export const Timer = ({ startDate }) => {
  const timer = useCountdown(startDate);
  return <div>{console.log(timer)}</div>;
};

Timer.propTypes;
