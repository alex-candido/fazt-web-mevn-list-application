import { AxiosResponse } from "axios";
import { Task } from "../interfaces/Task";
import axios from "./axios";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await axios.get("/tasks")
}

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => {
  return await axios.get(`/tasks/${id}`);
}
  
export const createTask = async (task: Task): Promise<AxiosResponse> => {
  return await axios.post("/tasks", task);
}

export const updateTask = async (
  id: string,
  newTask: Task
): Promise<AxiosResponse<Task>> => {
  return await axios.put(`/tasks/${id}`, newTask);
}