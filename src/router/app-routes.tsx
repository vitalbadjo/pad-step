import { Route, Routes } from "react-router-dom"
import { PageProfile } from "../pages/referrals/profile"
import { PageReferrals } from "../pages/referrals/referrals"

export type AppRouteNames = "person" | "referrals" | "pets" | "battle" | "friends" | "staking"
export type AppRouteType = {
  diasplayName: string
  path: string
  component: JSX.Element
  handle: boolean
  iconName: AppRouteNames
}

export const APP_ROUTES: Record<AppRouteNames, AppRouteType> = {

  person: {
    diasplayName: "Profile",
    path: '/person',
    component: <PageProfile />,
    handle: true,
    iconName: "person"
  },
  referrals: {
    diasplayName: "Referrals",
    path: '/referrals',
    component: <PageReferrals />,
    handle: false,
    iconName: "referrals"
  },
  pets: {
    diasplayName: "Pets",
    path: '/pets',
    component: <></>,
    handle: false,
    iconName: "pets"
  },
  battle: {
    diasplayName: "Battle",
    path: '/battle',
    component: <></>,
    handle: false,
    iconName: "battle"
  },
  friends: {
    diasplayName: "Friends",
    path: '/friends',
    component: <></>,
    handle: false,
    iconName: "friends"
  },
  staking: {
    diasplayName: "Staking",
    path: '/staking',
    component: <></>,
    handle: false,
    iconName: "staking"
  },
}

export const AppRoutes = () => {
  return <Routes>
    <Route path="/" element={<></>} />
    {
      Object.values(APP_ROUTES).map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          handle={route.handle}
        />)
    }
  </Routes>
}