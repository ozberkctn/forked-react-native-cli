"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _inquirer() {
  const data = _interopRequireDefault(require("inquirer"));

  _inquirer = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
var _default = questions => new Promise((resolve, reject) => {
  if (!questions) {
    resolve({});
    return;
  }

  _inquirer().default.prompt(questions).then(resolve, reject);
});

exports.default = _default;