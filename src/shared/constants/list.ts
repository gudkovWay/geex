
export type menuItemsProps = {
  path: string,
  icon: 'home' | 'market' | 'ratings' | 'champ' | 'organizations' | 'notification',
  text: string
}

export const headerItems: menuItemsProps[] = [
  { path: '/', icon: 'home', text: 'Лента' },
  { path: '/market', icon: 'market', text: 'Маркетплейс' },
  { path: '/ratings', icon: 'ratings', text: 'Рейтинги' },
  { path: '/champs', icon: 'champ', text: 'Соревнования' },
  { path: '/organizations', icon: 'organizations', text: 'Организации' }
]

export const menuItems: menuItemsProps[] = [
  { path: '/', icon: 'home', text: 'Лента' },
  { path: '/market', icon: 'market', text: 'Маркетплейс' },
  { path: '/notifications', icon: 'notification', text: 'Уведомления' },
  { path: '/ratings', icon: 'ratings', text: 'Рейтинги' },
  { path: '/champs', icon: 'champ', text: 'Соревнования' },
  { path: '/organizations', icon: 'organizations', text: 'Организации' }
]
