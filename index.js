#!/usr/bin/env node

import figlet from 'figlet';
import chalk from 'chalk';
import { ciceron } from './src/commands/ciceron.js';

console.log(
  chalk.green(figlet.textSync('ciceron', { horizontalLayout: 'full', font: 'shadow' }))
);

ciceron();