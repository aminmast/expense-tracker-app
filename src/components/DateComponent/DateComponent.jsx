const DateComponent = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fullDate = `${date.getFullYear()} / ${
    months[date.getMonth()]
  } / ${date.getDate()}`;

  const fullTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  return { fullDate, fullTime };
};

export default DateComponent;
