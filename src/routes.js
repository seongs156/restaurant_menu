
const routes = [

  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/components/TodoList'),
  },
  {
    path: '/register',
    name: 'RestaurantRegister',
    component: () => import('@/components//RestaurantRegister'),
  },


]

export default routes
