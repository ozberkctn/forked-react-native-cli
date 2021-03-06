"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findPodspecName;

function _glob() {
  const data = _interopRequireDefault(require("glob"));

  _glob = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
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
function findPodspecName(folder) {
  const podspecs = _glob().default.sync('*.podspec', {
    cwd: folder
  });

  let podspecFile = null;

  if (podspecs.length === 0) {
    return null;
  }

  if (podspecs.length === 1) {
    podspecFile = podspecs[0];
  } else {
    const folderParts = folder.split(_path().default.sep);
    const currentFolder = folderParts[folderParts.length - 1];
    const toSelect = podspecs.indexOf(`${currentFolder}.podspec`);

    if (toSelect === -1) {
      podspecFile = podspecs[0];
    } else {
      podspecFile = podspecs[toSelect];
    }
  }

  return podspecFile.replace('.podspec', '');
}