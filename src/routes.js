
const routes = [

  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/components/TodoList'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/register',
    name: 'RestaurantRegister',
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
    name: 'RestaurantList',
    component: () => import('@/components/restaurant/RestaurantList'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/menu_register',
    name: 'MenuRegister',
    component: () => import('@/components/restaurant/MenuRegister'),
    meta: {
      layout: 'UserLayout'
    }
  },
  {
    path: '/menu_view/:id',
    name: 'MenuView',
    component:() => import('@/components/restaurant/MenuView'),
    meta: {
      layout: 'UserLayout'
    }
  },
];

export default routes
