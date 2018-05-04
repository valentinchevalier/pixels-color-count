export default class Perf {
  constructor(performance = 'Performance') {
    this.performance = performance;
  }

  startExecution() {
    this.startTime = performance.now();
  }

  stopExecution() {
    this.endTime = performance.now();
  }

  getExecutionDuration() {
    const time = (this.endTime - this.startTime) / 1000;
    return time.toFixed(3);
  }

  log() {
    console.info(`${this.performance} : ${this.getExecutionDuration()} secondes.`);
  }
}
