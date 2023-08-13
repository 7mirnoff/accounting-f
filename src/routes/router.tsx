import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@layouts'
import { Dashboard, Login, Promo } from '@pages'

import { AppRoutes } from './routes'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,

    children: [
      // Общедоступные страницы
      {
        path: AppRoutes.Promo,
        element: <Promo />,
      },
      {
        path: AppRoutes.Dashboard,
        element: <Dashboard />,
      },
      {
        path: AppRoutes.Login,
        element: <Login />,
      },

      // Только неавторизованные
      // {
      //   element: <RequireLogout />,
      //   children: [
      //     {
      //       path: AppRoutes.UserForm,
      //       element: <UserFormPage />,
      //     },
      //   ],
      // },
      // Только авторизованные
      // {
      //   element: <RequireAuth />,
      //   children: [
      //     {
      //       path: AppRoutes.Questionnaires,
      //       element: <QuestionnairesPage />,
      //     },
      //     {
      //       path: AppRoutes.Profile,
      //       element: <ProfilePage />,
      //     },
      //     {
      //       path: AppRoutes.EditProfile,
      //       element: <EditProfilePage />,
      //     },
      //     {
      //       path: AppRoutes.Teammates,
      //       element: <TeammatesPage />,
      //     },
      //   ],
      // },
    ],
  },
])
