import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

export default function CalendarDemo() {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <Calendar
          id="buttondisplay"
          value={date}
          onChange={(e) => setDate(e.value)}
          showIcon
          className="bg-black"
        />
      </div>
    </div>
  );
}
