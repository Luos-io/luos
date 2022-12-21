declare module '@packages/docusaurus-theme-github-release' {
  export type ThemeConfig = {
    github: {
      appId: string;
      apiKey: string;
      releasePagePath: string | false | null;
    };
  };
}

declare module '@theme/ReleaseComponent' {
  import type { GitHubReleaseData } from '@packages/docusaurus-plugin-github-release';

  export interface ReleaseComponentProps {
    release: GitHubReleaseData;
  }
  export default function ReleaseComponent(props: ReleaseComponentProps): JSX.Element;
}
