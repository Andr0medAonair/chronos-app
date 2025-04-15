import { TaskStateModel } from "../models/TasksStateModel";

let instance: TimerWorkerManager | null = null;
const timerWorkerPath = './timerWorker.js';

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL(timerWorkerPath, import.meta.url), { type: 'module' })
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }

    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
