enum TaskType {
  WORK_TIME = "workTime",
  SHORT_BREAK_TIME = "shortBreakTime",
  LONG_BREAK_TIME = "longBreakTime"
}

export type TaskModel = {
  id: string,
  name: string,
  duration: number,
  startDate: number,
  completionDate: number | null,
  interruptionDate: number | null,
  type: TaskType
}