import React from 'react';
import Reminder from '../models/reminder';

/**
 * ReminderListProps - naming convention many people use
 */
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList(props: ReminderListProps) {
  const { items, onRemoveReminder } = props;
  return (
    <ul>
      {
        items.map(reminder => (
          <li key={reminder.id}>
            {reminder.title}
            <button onClick={() => onRemoveReminder(reminder.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  );
}

export default ReminderList;
