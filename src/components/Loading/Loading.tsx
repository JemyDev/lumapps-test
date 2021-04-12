import React, { FC } from 'react';
import { Alignment, FlexBox, Progress } from '@lumx/react';

const Loading: FC = () => (
  <FlexBox hAlign={Alignment.center} vAlign={Alignment.center} fillSpace marginAuto={[Alignment.top, Alignment.bottom]}>
    <Progress />
  </FlexBox>
);

export default Loading;
