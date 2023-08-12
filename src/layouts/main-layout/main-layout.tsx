import React from 'react'

import { Link, Outlet } from 'react-router-dom'

import { AppRoutes } from '@routes'

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Link to={AppRoutes.Promo}>Promo</Link>
      <Link to={AppRoutes.Dashboard}>Dashboard</Link>
      <Outlet />
    </div>
  )
}
