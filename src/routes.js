
const routes = [

  {
    path: '/restaurant-register',
    name: 'restaurantRegister',
    component: () => import('@/components/restaurant/RestaurantRegister'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/components/common/Address'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/',
    name: 'RestaurantLanding',
    component: () => import('@/components/restaurant/RestaurantLanding'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/restaurant-list',
    name: 'RestaurantList',
    component: () => import('@/components/restaurant/RestaurantList'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/menu-register',
    name: 'MenuRegister',
    component: () => import('@/components/restaurant/MenuRegister'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/menu-view/:id',
    name: 'MenuView',
    component:() => import('@/components/restaurant/MenuView'),
    meta: {
      layout: 'UserLayout'
    }
  },
];

export default routes
