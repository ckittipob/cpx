import { cp, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = join(__dirname, '../../..')
const srcDir = join(__dirname, '../src')
const examples = join(root, 'examples', 'design-tokens')

await mkdir(srcDir, { recursive: true })
await cp(examples, srcDir, { recursive: true })
console.log('Copied example design tokens into package src/')


