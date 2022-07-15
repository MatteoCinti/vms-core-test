import * as debug from 'debug'

export const getDebugger = (componentName: string): debug.Debugger => debug(`vms:${componentName}`)