import { Task } from "../interfaces/Task";
import axios from "./axios";

export const getTasks = async () => {
  return await axios.get("/tasks")
}

export const createTask = async (task: Task) => {
  return await axios.post("/tasks", task);
}
