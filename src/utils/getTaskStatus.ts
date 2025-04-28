import { TaskModel } from "../models/TaskModel";

export function getTaskStatus (task: TaskModel, activeTask: TaskModel | null): string {
    if(task.completionDate) return "Completed"
    if(task.interruptionDate) return "Interrupted"
    if(task.id === activeTask?.id) return "In progress"
    return "Abandoned"
}