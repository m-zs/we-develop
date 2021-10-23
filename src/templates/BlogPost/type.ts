import { PageProps } from 'gatsby';

import { PostBase } from 'shared/types/post';

export interface BlogProps extends PageProps {
  data: {
    mdx: PostBase & { body: string };
  };
}
