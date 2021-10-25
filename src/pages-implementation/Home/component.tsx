import React, { FC } from 'react';

import { HomeProps } from './type';
import * as S from './style';
import Seo from 'components/Seo';
import ArticlesList from 'components/ArticlesList';
import HighlightedLink from 'components/HighlightedLink';

const Home: FC<HomeProps> = ({ data }) => (
  <>
    <Seo
      title="Homepage"
      description="WE DEVELOP - personal blog about web development, tech books, and other..."
    />

    <S.Section>
      <S.Introduction>
        Hey, <HighlightedLink href="/about" text="I'm Matt" />, <br />
        and this is my <HighlightedLink href="/blog" text="blog" /> about web
        dev, tech books, and other stuff...
      </S.Introduction>
    </S.Section>

    <S.Section>
      <S.Header>Latest Articles</S.Header>
      <ArticlesList articles={data.allMdx.articles} />
    </S.Section>
  </>
);

export default Home;
