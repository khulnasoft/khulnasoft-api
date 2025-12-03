---
sidebar_position: 9
---

# Khulnasoft CLI

## Installation

`khulnasoft` is paired with a CLI in order to generate metadata and schema used
to implement `khulnasoft.types`, `khulnasoft.codegenSchema`, and the Typescript
client. To get started, install the CLI:

```bash
npm i --save 'khulnasoft/khulnasoft-api#cli-0.0.1'
```

## Usage

Once installed, you can run the client by executing `khulnasoft` within a
`khulnasoft` project.

The CLI operates on npm packages, and operates relative to the current
directory's or first parent directory's `package.json`. The directory with
`package.json` must also have a `tsconfig.json`.

:::note

For correct schema generation, Typescript's `strict` mode must be enabled.

:::

The CLI looks for invocations of the `types` and `codegenSchema` methods on the
`Khulnasoft` class. For this to work correctly, these methods must be called
inline for every usage; they cannot be wrapped in other functions or renamed.

## Generation

The CLI generates files in the `@khulnasoft-api/cli` folder within
`node_modules`. Generation should be rerun every time an input type to
`khulnasoft.types`, `khulnasoft.codegenSchema`, or any type those types depend
on, change. The watch flag automates this process.

## Flags

### `-w, --watch`

Enables watch mode. Listens for file changes, and regenerates metadata and
schema data as appropriate.

### `-d, --directory <path>`

Specifies an explicit project directory to run codegen for instead of using the
current working directory.

### `-o, --outdir <path>`

Specifies the output directory of generated schema files.
