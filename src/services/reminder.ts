import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
  private http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });


  public async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }

  public async addReminder(title: string) {
    const { http } = this;
    const response = await http.post<Reminder>('/todos', { title });
    return response.data;
  }  

  public async removeReminder(id: number) {
    const { http } = this;
    const response = await http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();