import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find()
  res.send(tasks)
})

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  const savedTask = await newTask.save();
  res.json(savedTask);
})

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found"});
    res.send(task);
  } catch (error) {
    return res.status(500).send(error);
  }
})

router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedTask);
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found"});
    res.json(task);
  } catch (error) {
    return res.status(500).send(error);
  }
})

export default router;