import React from 'react'

import { Link } from 'react-router-dom'

import { AppRoutes } from '@routes'

import * as S from './header.styled'

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Link to={AppRoutes.Promo}>Promo</Link>
      <Link to={AppRoutes.Dashboard}>Dashboard</Link>
      <Link to={AppRoutes.Login}>Login</Link>
    </S.Header>
  )
}
