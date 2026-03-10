import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: { cli: 'src/cli.ts' },
    format: ['esm'],
    target: 'node18',
    sourcemap: true,
    clean: true,
    banner: { js: '#!/usr/bin/env node' },
  },
  {
    entry: { mcp: 'src/mcp.ts' },
    format: ['esm'],
    target: 'node18',
    sourcemap: true,
  },
  {
    entry: { index: 'src/index.ts' },
    format: ['esm'],
    target: 'node18',
    dts: true,
    sourcemap: true,
  },
])