export interface Tutorial {
  title: string;
  link: string;
}

export interface BlogPost {
  title: string;
  permalink: string;
}

export interface FooterProps {
  tutorials: Tutorial[];
  lastBlogPosts: BlogPost[];
}
