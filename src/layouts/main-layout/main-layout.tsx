import React from 'react'

import { Outlet } from 'react-router-dom'

import { Header } from '@components'

import * as S from './main-layout.styled'

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </>
  )
}
