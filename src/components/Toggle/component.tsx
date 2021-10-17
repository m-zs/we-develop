import React, { FC, useState } from 'react';

import { Position, ToggleProps } from './type';
import * as S from './style';

const Toggle: FC<ToggleProps> = ({
  toggleCallback,
  imageLeft,
  imageRight,
  selectedSide = 'left',
}) => {
  const [sideToggled, setSideToggled] = useState<Position>(selectedSide);

  const handleToggleChange = () => {
    setSideToggled(sideToggled === 'left' ? 'right' : 'left');
    toggleCallback();
  };

  return (
    <S.Container
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggleChange();
        }
      }}
      onClick={handleToggleChange}
      position={sideToggled}
    >
      {imageLeft && (
        <S.Icon
          src={imageLeft.src}
          alt={imageLeft.alt}
          active={sideToggled === 'left'}
        />
      )}
      {imageRight && (
        <S.Icon
          src={imageRight.src}
          alt={imageRight.alt}
          active={sideToggled === 'right'}
        />
      )}
    </S.Container>
  );
};

export default Toggle;
