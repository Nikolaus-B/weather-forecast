export const City = ({ city, changeSelectedCity }) => {
  return (
    <li
      onClick={() =>
        changeSelectedCity({
          address: city.address,
          startDate: city.startDate,
          endDate: city.endDate,
        })
      }
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAACUCAMAAAAzmpx4AAAAV1BMVEXy8vJmZmbz8/NgYGD4+Pj///+cnJzi4uLGxsZVVVWLi4tYWFjS0tJ1dXVycnJjY2Pq6up+fn67u7u0tLRsbGySkpKioqLa2tqpqamEhITMzMxPT09KSkpmAvD+AAAHxUlEQVR4nO2c25qCOAyAS5oWBIFyPsy+/3NuCuigggpTpeySC78ZlJKfHEhKgbH/ngBsrcEn5KDajxxU+5GDaj9yUO1HDqr9yEG1Hzmo9iMH1X7koNqPHFT7kYNqP3JQ7UcOqv3IQbUfOaj2I3+hgpHg9WN+y9Sm6S3XTV+nQnCr82elcleqt5aKzmMWBp+VEw+zdQqupsI64KcPS8CDWqzSbiUVVpzntfdZqfOYV/hNqprnrcDPimhzXn+VSvLQ/fBVAcANufwyVeQisMekbEzoIG70dapQU31UtqH6dGECB9XNjgfVSP5nVOtL0omxrKFifyi1H4ayg4paCKZIYI0qj2IHFUFVWdE0ReaSLn+3mCVULAt5wDmPE8+EG9pBRSUvdzrhsWfACW2gAvR+nKsEr1oIGD6eKGABFQVVFP9Scf9pv6drV5Ln0WcBFTWSJ2ckwfN0gVB5XsWe6mwFVcrHVKd5F6QGBqsicpzIp2Q574U2UIk6uLFV+4QK27g7BbHOKrMq2ECFafCerQiqyocQ5FE136XZQAXu23GFzdVZeTEfWzZQMRGOAisopnOg3gWzkVV5NquDFVTYBtfUzuPZuRrKFM7oEhAH7qyrbk8FXRa8hIvTzkeLSuIRlcPzOSUsoNL5GtJE14EBb9q5foS2lzdXAMIq535rAZUeDd1UFkWZqvkMgN6NpTrxps+BLVSkNLVXDOdVQZXzeygeTqd3O6i0D3Yt/vyogP4DVJfeJ39sBdXlCjVbA9H1N/15hKLrQDalvCVUL4+G5ykmnd4rfIytnVCh8h8yxeCDycTs1D6oAOqJoOpsRen9Uf0dUAHcFB+P8jgnsAMq7X/OjKl6H3yosfZABVgEzhNbcXmfOe2hmh/wrleewErvynx7qGYHRTd6YqguZQTqtsSwiGpmnh1U88JUhBXd96GWUNEm5U7Ns88m9Rus+ra5sYQKwZNN0tTu/RwLts8SxZUqb8dj2kFF/5fUBcecJy3eTYHm/A0qhzdqvJcdVEyS7lp7nt/Om+mk/paxAjmysgVU1H+woptl0WCcX7F00/Uqqf/KaZTeLaDqr7Kjs34evqacWL1K6qP94t97XxZQAZQ3s5xx7l1iSxVvm8qJuc/QEird/pZ38xFxfsZh+u99KI2V6ZVEFlBROa7uZ460M1EmZIjnJVDd2QA7bIXs1v160SmDoip/O6iG3RJlBRXgFFRnLQAVTn73RE4DyoZU3ZTSXDnEdcpwX1eAdydjuEu0qa0A52s8TikD3WQhll57uDEVsPqJi3HuEdZSa3Ffz/5u6YFYP6mGqM6glLEcK85gS6oe6qmCeds74ZJUGOcVbkWllyPUjzcD5rCWCE82oyKol3UD+eAqJwyk2MwDs9fXIl3CnwhLTd03eCInb6M10vgGVE/Gz4BvzFzc7BO6ahOq98vWNbHF5Qar9EP1fi9IsbX4ckxZqN7g2YPyramIq5JBC0tji8ffpopfZvQHLF1lLEwZX6daxqSxHMJSS2PLdioqWhenjPjbcbWcqptQw8em+dke36UqV9hKV/Cpt6SHjOOJW5AfpFqk3EhOp9e/GUmwalXy6gXakKzEWgaVrNJvPZUbnfin5RTNrkf7EBWAJ/3PivTYk/Wrn6DS/aL4tKx9xNDEgw/2yUG1HzFHBfC71mzifrGpw7yri8mRfm8njL8xdYhlupgaq7tD8/i2DUD8sqMbPBwor5tLU2f3xmQA1Xm3HkhUP4W2lEq65QWXkQk0a9Rwn2FqEeAF3pgihqlOob67OFCxX0W9TC1ZG2RAFZNUXJbaAxu9Ql8/M3ZhQ9Qx120ZtkL/SFn/s+6v39+bUMUoVZu4PRVAK+XwxCaAWzFMXU+WLnYf+rHOoiS7MqxK6VWefspHFimYckOzVKrIhrhK8yyNauyCBlOphJMUXhP5svX17KifeJLrRexcek3oU98fpF4ihY1UAWujzlboRmfEKjr3+SEtQFCrDkidLUCSossVCr8Uwi8EIi8Qw1SgCubCb7EqRqkUJB5qKo+yHig/7WMnLZhwWmRIQAyKDF0yqZASWUxuKAqfTMUIuknNPBNumkqkkdBUWaGvxbLsPBA6Ko/UTrKOCnSyUORw7omsI7JGnDlTivnr3lM0oYrZuEIIKpa0WEudBks5TUV/ncskL0UVdGHXCM9pSLilVCDqBshWZanvbc1SoTxJVcoRVdy9lUAZUsc0FSD3mt5W5IG3VOxCJdqTK0RHpfcgqtYRXdVhabYgt/OJKvX1wuAim6EqG8EoWwimX40lSh8rrtfbyfmHcReqYtpW4OZxi5W+KLnhedoDNRWIsBQY1gJFWKByWoFs3eu/plQxWt0qXR3If1pUfuEq2Re1PRXXtgo1lZ+J80+rat4o9AKP/qCrcOZUqswNQZml8jUFnJszQ7dwYt8dKqa2ZljQlQm7Iirz9GIaLqsoJZqYy8wnN6zjy+9NqGKyaxTdU3KoJ7yAagZxaTt03Sqgbx/1B2Pdt/ThUtUrar/fYmN1O3RP4x5ktCqyD7C+v/otYoX0GSo+lBSGZxsMDdXD3MxfXL+5/edyVFRhUoQ+3J+EP6uy7cwZqDZtzSux9Xxg/7pU86OaHnHZ4T80rAVzt+ZVsIHKvBxU+5GDaj9yUO1HDqr9yEG1HwH4FyabedM63cIlAAAAAElFTkSuQmCC"
        alt="City image"
      />
      <div>
        <p>{city.address}</p>

        <p>
          {city.startDate} - {city.endDate}
        </p>
      </div>
    </li>
  );
};

City.propTypes;
