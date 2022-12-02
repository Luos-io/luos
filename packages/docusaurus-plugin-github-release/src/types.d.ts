/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/theme-common" />
/// <reference types="@docusaurus/theme-classic" />

export * from './theme-github-release';

declare module '@packages/docusaurus-plugin-github-release' {
  import { PluginConfig } from '@docusaurus/types';
  export interface IPluginConfig extends PluginConfig {
    apiKey: string;
    appService: string;
    debug?: boolean;
    dotenv?: {
      path: string;
    };
  }
  export type GitHubReleaseData = {
    version: string;
  };
  export type GitHubData = {
    releases: GitHubReleaseData[];
  };
}
