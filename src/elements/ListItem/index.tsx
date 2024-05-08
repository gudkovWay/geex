import { Link, List, ListItem, Typography } from "@mui/material"

import Icon from "../../components/Icon"
import { HeaderProps } from "../../components/Header"

type menuItemsProps = {
  path: string,
  icon: 'home' | 'market' | 'ratings' | 'champ' | 'organizations',
  text: string
}

const menuItems: menuItemsProps[] = [
  { path: '/', icon: 'home', text: 'Лента' },
  { path: '/market', icon: 'market', text: 'Маркетплейс' },
  { path: '/ratings', icon: 'ratings', text: 'Рейтинги' },
  { path: '/champs', icon: 'champ', text: 'Соревнования' },
  { path: '/organizations', icon: 'organizations', text: 'Организации' }
]

const HeaderListItem: React.FC<HeaderProps> = ({ isActive }) => {
  return (
    <List sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '30px' }} disablePadding>
      {menuItems.map(item => (
        <ListItem key={item.path} disablePadding>
          <Link href={item.path} underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
            <Icon name={item.icon} />
            <Typography variant="body1" sx={{ color: isActive === item.path ? 'primary.contrastText' : 'primary.dark' }}>{item.text}</Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default HeaderListItem
