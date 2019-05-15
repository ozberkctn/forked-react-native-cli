"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../../tools/logger"));

var PackageManager = _interopRequireWildcard(require("../../tools/PackageManager"));

var _unlink = _interopRequireDefault(require("../link/unlink"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
async function uninstall(args, ctx) {
  const name = args[0];

  _logger.default.info(`Unlinking "${name}"...`);

  await _unlink.default.func([name], ctx);

  _logger.default.info(`Uninstalling "${name}"...`);

  PackageManager.uninstall([name]);

  _logger.default.success(`Successfully uninstalled and unlinked "${name}"`);
}

var _default = {
  func: uninstall,
  description: 'uninstall and unlink native dependencies',
  name: 'uninstall <packageName>'
};
exports.default = _default;