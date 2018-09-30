/*
 * Copyright (c) 2018 Mailtech.cn, Ltd. All Rights Reserved.
 */

const baseConfig = require('./base-config');
const environment = require('./env');

/** @namespace config.output */
module.exports = environment.wrap(baseConfig, 'development');
