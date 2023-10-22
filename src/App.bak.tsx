// Libraries
import React, { useEffect, useState } from "react";
import './style/index.css';
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
 
import reminderService from '~/services/reminder'; 

// console.log(reminderService);

/**
 * Я использую для тестовых асинхронных запросов - 
 * https://jsonplaceholder.typicode.com/
 * 
 */
function App() {
  // Я добавил массив в вызов функции useState, потому что иначе ts думает, что
  // reminders - undefined. Это стандартное решение этой задачи.
  // Таким образом я добавляю значение по умолчанию.
  
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'ColoBrod' },
    { id: 2, title: 'Buxan' },
    { id: 3, title: 'Nuenid' },
  ]);

  useEffect(() => { loadReminders() }, []);

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
      <button>Click me</button>
    </div>
  )

  async function loadReminders() {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  function removeReminder(id: number) {
    const filtered = reminders.filter(r => r.id != id);
    setReminders(filtered);

  }
};


export default App;