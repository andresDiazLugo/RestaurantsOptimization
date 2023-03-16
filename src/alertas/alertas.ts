export class alertsUser {
  private alerts: string[] | [string[]]
  constructor () {
    this.alerts = []
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  addAlerts (type: string, msg: string) {
    const arrayMSG: string[] = []
    arrayMSG.push(msg)
    if (type === 'error') {
      this.alerts[0] = type
      this.alerts[1] = arrayMSG
      return this.alerts
    } else {
      this.alerts[0] = type
      this.alerts[1] = arrayMSG
      console.log(this.alerts)
      return this.alerts
    }
  }
}
