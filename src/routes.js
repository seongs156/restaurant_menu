
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
    path: '/',
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

];

export default routes
