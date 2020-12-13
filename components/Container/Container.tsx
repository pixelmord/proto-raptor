import { Container as ChakraContainer, ContainerProps as ChakraContainerProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

export type ContainerProps = ChakraContainerProps & {
  fullWidth?: boolean;
};
export const Container: React.FC<ContainerProps> = ({
  fullWidth = false,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  const width = fullWidth ? '100%' : ['95%', '90%'];
  return <ChakraContainer width={width} {...props} />;
};
export default Container;
