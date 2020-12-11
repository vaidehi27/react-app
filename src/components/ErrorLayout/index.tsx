import React, { FunctionComponent, ReactNode } from 'react';

import {
  Container,
  ContentContainer,
  Title,
  Description,
  Children
} from './style';

interface ErrorLayoutProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const ErrorLayout: FunctionComponent<ErrorLayoutProps> = ({
  title = 'Error',
  description,
  children = null,
  ...props
}) => {
  return (
    <Container {...props}>
      <ContentContainer>
        <Title>{title}</Title>
        {!!description && <Description>{description}</Description>}
        {!!children && <Children>{children}</Children>}
      </ContentContainer>
    </Container>
  );
};

export default ErrorLayout;
