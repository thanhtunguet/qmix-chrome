#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const MANIFEST_PATH = path.resolve(process.cwd(), 'extension/manifest.json');

const encodingOptions = {
  encoding: 'utf-8',
};

const manifest = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), 'extension/manifest.json'),
    encodingOptions,
  ),
);

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), 'package.json'), encodingOptions),
);

const {version, description} = pkg;

Object.assign(manifest, {
  version,
  description,
});

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
