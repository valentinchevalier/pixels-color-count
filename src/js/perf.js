export default class Perf {
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
}
