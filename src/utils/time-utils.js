export default class TimeUtils {
  
  static leftPad(n) {
    return `0${n}`.substr(-2)
  }

  static formattedTime(time) {
    const minutes = parseInt(time / 60, 10);
    const seconds = parseInt(time % 60, 10);
    return `${this.leftPad(minutes)} : ${this.leftPad(seconds)}`
  }

}