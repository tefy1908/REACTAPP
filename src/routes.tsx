import { Route } from 'react-router-dom';
import Private from './Views/Private';
import Public from './Views/Public';
import Icons from "./assets";



//import { ReactComponent as partnerIcon } from "assets/img/menu/partner.svg";

export const LAYOUT_TYPE = {
  PRIVATE: "/private",
  PUBLIC: "/public",
}

interface RoutesInterface {
  path: string;
  layout: "/private"|"/public";
  name?: string;
  component: React.FC;
  hidden?: boolean;
  Icon?: React.FC<{ color?: string }>|any;
}


const routes: RoutesInterface[] = [
  // PRIVATE
  // {
  //   path: "/offer",
  //   layout: "/private",
  //   name: "Demandes",
  //   Icon: incomingIcon,
  //   component: InComingRides,
  // },
  {
    path: "/new-ride",
    layout: "/private",
    name: "Réserver un transport",
    component: Private.NewRide,
    Icon : Icons.Menu.NewRide,
   
  },
  
  {
    path: "/reservation",
    layout: "/private",
    name: "Réservation",
    component: Private.Ongoing, 
    Icon : Icons.Menu.Ongoing,// component c element
  },
  {
    path: "/history",
    layout: "/private",
    name: "Historique",
    component: Private.RideHistory,
    Icon : Icons.Menu.History,
  },
  {
    hidden: true,
    path: "/Search",
    layout: "/private",
    name: "Rechercher",
    component: Private.Search,
  },
  // {
  //   path: "/TestPage",
  //   layout: "/private",
  //   name: "testpage",
  //   component: Private.TestPage,
  // },
  // {
  //   path: "/staff",
  //   layout: "/private",
  //   name: "staff list",
  //   component: StaffPage,
  // },
  // {
  //   path: "/OngoingRide",
  //   layout: "/private",
  //   name: "Réservations en cours",
  //   component: Private.OngoingRide,
  // },
  {
    hidden: true,
    path: "*",
    layout: "/private",
    name: "not found 404",
    component: Private.Ongoing,
  },
  // PUBLIC
  {
    path: "/login",
    layout: "/public",
    name: "Page login",
    component: Public.Login,
  },
  {
    path: "/forgot",
    layout: "/public",
    name: "Forgot password",
    component: Public.Forgot,
  },
  {
    layout: "/public",
    path: `*`,
    component: Public.Login,
  },
 
];

export function getRoutes(layout: '/private' | '/public') {
  return routes.map((prop, key) => {
    if (prop.layout === layout) {
      const View = prop.component;
      return (
        <Route
          path={prop.path}
          element={<View />}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
}
export function getLink(layout : '/private' | '/public' ){
  return 
}

export default routes;