import dayjs from "dayjs";

interface useMonthProps {
  daysOfMonth: dayjs.Dayjs[];
}

const date_mapper = {
  date: {
    monthFirstDay: (day: dayjs.Dayjs): dayjs.Dayjs => {
      return day.startOf("month").startOf("month");
    },
    dateOfMonths: (day: dayjs.Dayjs): dayjs.Dayjs[] => {
      return Array.from(
        { length: date_mapper.date.monthFirstDay(day).daysInMonth() },
        (_, i) => dayjs(day).startOf("month").add(i, "day")
      );
    },
  },
};

export default function useMonth ({ daysOfMonth }: useMonthProps)  {
  const currentMonth = daysOfMonth[0].format("YYYY년 M월");

  const currentMonthDays = [
    ...Array.from({ length: daysOfMonth[0].day() }, () => null),
    ...daysOfMonth,
  ];


  return {
    currentMonth,
    currentMonthDays,
  };
};