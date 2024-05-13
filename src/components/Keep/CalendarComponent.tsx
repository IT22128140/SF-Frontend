import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarComponentProps {
  events: { title: string; date: string }[];
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        padding: "20px",
        fontWeight: "none",
        fontFamily: "Helvetica",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
      />
    </div>
  );
};

export default CalendarComponent;
