import { AxiosResponse } from "axios";
import { Task } from "../interfaces/Task";
import axios from "./axios";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await axios.get("/tasks")
}

export const createTask = async (task: Task): Promise<AxiosResponse> => {
  return await axios.post("/tasks", task);
}
