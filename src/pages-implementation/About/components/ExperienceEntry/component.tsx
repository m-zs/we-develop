import React, { FC } from 'react';

import * as S from './style';

import Tag from 'components/Tag';
import { TimelineItem } from 'pages-implementation/About/type';

const ExperienceEntry: FC<TimelineItem> = ({
  dates,
  company,
  experience,
  stack,
  description,
}) => (
  <S.Container>
    <S.Date>📆 {dates}</S.Date>
    <S.Company>{company}</S.Company>

    <S.InnerSection>
      <S.SubTitle>Projects</S.SubTitle>
      <div>
        {experience.map(({ text, href, hreflang }, i) =>
          href ? (
            <S.StyledHighlightedLink
              type="a"
              text={text}
              href={href}
              hreflang={hreflang}
              key={i}
            />
          ) : (
            <S.Project key={i}>{text}</S.Project>
          ),
        )}
      </div>
    </S.InnerSection>

    <S.InnerSection>
      <S.SubTitle>Technologies</S.SubTitle>
      {stack &&
        stack.map((technology) => <Tag key={technology} text={technology} />)}
    </S.InnerSection>

    <S.InnerSection>
      <S.SubTitle>About</S.SubTitle>
      <S.WorkDescription dangerouslySetInnerHTML={{ __html: description }} />
    </S.InnerSection>
  </S.Container>
);

export default ExperienceEntry;
