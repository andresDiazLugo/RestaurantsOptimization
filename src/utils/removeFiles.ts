import { unlink } from 'node:fs'

export function removeFile (filePath: string): void {
  unlink(filePath, (err) => {
    if (err !== null) throw err
    console.log(`${filePath} was deleted`)
  })
}
