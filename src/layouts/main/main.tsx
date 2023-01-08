import React from 'react';
import { Container } from '@mui/material';
import MainLayoutHeader from './components/header';

export const MainLayout = ({ children, bgColor }: IMainLayoutProps) => {
  return (
    <div>
      <MainLayoutHeader bgColor={bgColor ?? 'light'} />
      <Container fixed maxWidth="md">
        {children}
      </Container>
    </div>
  );
};

export const withMainLayout = (
  Component: React.ComponentType,
  bgColor?: IMainLayoutBgColorTypes
) => {
  return function WithMainLayout(props: any) {
    return (
      <MainLayout bgColor={bgColor ?? 'light'}>
        <Component {...props} />
      </MainLayout>
    );
  };
};

export type IMainLayoutBgColorTypes = 'dark' | 'light';
export interface IMainLayoutProps {
  children: React.ReactNode;
  bgColor?: IMainLayoutBgColorTypes;
}
