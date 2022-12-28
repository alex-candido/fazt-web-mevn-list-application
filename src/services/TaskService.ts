import { Task } from "../interfaces/Task";
import axios from "./axios";

export const createTask = async (task: Task) => {
  return await axios.post("/tasks", task);
}
