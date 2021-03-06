/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * This file is the entry point for browserify.
 */

import { Terminal } from './Terminal';

//add terminado
import * as terminado from './addons/terminado/terminado';
Terminal.applyAddon(terminado);

module.exports = Terminal;
