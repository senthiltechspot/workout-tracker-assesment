import React, { useState } from "react";

const CalendarWithTime = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Function to render time slots from 6am to 7pm
  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 6; hour <= 19; hour++) {
      const timeSlotTasks = tasks.filter((task) => {
        const taskDate = new Date(task.date);
        return (
          taskDate.getHours() === hour && isSameDay(taskDate, selectedDate)
        );
      });

      timeSlots.push(
        <div
          key={hour}
          className="w-full flex gap-3 p-2 border-b-4 cursor-pointer hover:bg-gray-200"
          onClick={() => handleTaskAddition(hour)}
        >
          {hour < 12 ? `${hour}am` : hour === 12 ? "12pm" : `${hour - 12}pm`}
          {timeSlotTasks.map((task, index) => (
            <div key={index} className="bg-gray-300 rounded-full px-3">
              {task.title}
            </div>
          ))}
        </div>
      );
    }
    return timeSlots;
  };

  // Function to handle task addition at a specific time
  const handleTaskAddition = (hour) => {
    const selectedTime = new Date(selectedDate);
    selectedTime.setHours(hour);
    const title = prompt(
      `Enter task title for ${selectedTime.toLocaleString()}:`
    );
    if (title) {
      setTasks([...tasks, { date: selectedTime, title }]);
    }
  };

  // Function to render days of the month
  const renderDays = () => {
    const days = [];
    const currentDate = new Date(selectedDate);
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const startDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const totalDays = lastDayOfMonth.getDate();

    // Adjust startDay to handle negative values
    const adjustedStartDay = startDay === 0 ? 7 : startDay;

    for (let i = 1; i <= totalDays + adjustedStartDay; i++) {
      const day = i - adjustedStartDay;

      if (day > 0) {
        // Ensure only valid dates are rendered
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );
        const dayIndex = (startDay + day - 1) % 7; // Adjusted day index
        days.push(
          <div
            key={i}
            className={`flex flex-col items-center justify-center px-5 py-5 w-[150px] rounded-lg ${
              selectedDate.toDateString() === date.toDateString()
                ? "bg-gradient-to-r from-[#D1DBFF] to-[#8DA4FF] text-white"
                : ""
            } `}
            onClick={() => setSelectedDate(date)}
          >
            <h3>{weekdays[dayIndex].slice(0, 3)}</h3>
            <div className="date">{day}</div>
            {/* <div className="tasks">
              {tasks
                .filter((task) => isSameDay(task.date, date))
                .map((task, index) => (
                  <div key={index} className="task">
                    {task.title}
                  </div>
                ))}
            </div> */}
          </div>
        );
      }
    }
    return days;
  };

  // Function to check if two dates are the same day
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Function to handle next month navigation
  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  // Function to handle previous month navigation
  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  return (
    <div className="">
      <div className="header">
        <i className="bi bi-chevron-left" onClick={handlePrevMonth}></i>
        <h2>
          {selectedDate.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <i className="bi bi-chevron-right" onClick={handleNextMonth}></i>
      </div>
      <div className="flex gap-2 overflow-x-auto">{renderDays()}</div>
      <div className="flex flex-col gap-2 mt-7">{renderTimeSlots()}</div>
    </div>
  );
};

export default CalendarWithTime;
