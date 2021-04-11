import React, { FC } from 'react';
import { Alignment, FlexBox, Progress } from '@lumx/react';

const Loading: FC = () => (
  <FlexBox hAlign={Alignment.center} vAlign={Alignment.center}>
    <Progress />
  </FlexBox>
);

export default Loading;
