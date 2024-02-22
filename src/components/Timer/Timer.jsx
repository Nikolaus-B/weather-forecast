import { useCountdown } from "../../hooks/useCountdown";
import { Cuntdown } from "./Timer.styled";

export const Timer = ({ startDate }) => {
  const timer = useCountdown(startDate);
  return (
    <div>
      <Cuntdown>{timer.join(":")}</Cuntdown>
    </div>
  );
};

Timer.propTypes;
