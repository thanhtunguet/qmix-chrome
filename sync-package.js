#!/usr/bin/env node

const MANIFEST_PATH = './extension/manifest.json';

const fs = require('fs');
const manifest = require('./extension/manifest.json');
const pkg = require('./package.json');

manifest.version = pkg.version;
fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));