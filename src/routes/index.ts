import { Router } from 'express'

import path from 'node:path'

import fs from 'node:fs/promises'

const router = Router()

const PATH_ROUTER = path.join('dist', 'routes')

function removeExtension (fileName: string): string {
  const file = fileName.split('.')[0]
  return file
}

async function readFiles (path: string): Promise<string[] | undefined> {
  try {
    const files = await fs.readdir(path)
    return files
  } catch (error: any) {
    console.error(error)
  }
}

void readFiles(PATH_ROUTER).then(files => {
  files?.forEach((fileName: string) => {
    const cleanName = removeExtension(fileName)
    if (cleanName !== 'index') {
      import(`./${cleanName}.js`)
        .then(moduleRouter => {
          console.log(`Se cargó la ruta: /${cleanName}`)
          router.use(`/${cleanName}`, moduleRouter.router)
        }).catch(console.error)
    }
  })
})

export { router }
