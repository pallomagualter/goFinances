import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Container } from './styles';


interface Props {
  title: string;
}

export function Dashboard({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}