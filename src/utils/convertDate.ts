export default function convertDate(dateStr: string) {
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

  const fullDate = new Date(dateStr);

  const getMonth = fullDate.getMonth();
  const getDate = fullDate.getDate();
  const getFullYear = fullDate.getFullYear();

  return `${getDate} ${months[getMonth]} ${getFullYear}`;
}
