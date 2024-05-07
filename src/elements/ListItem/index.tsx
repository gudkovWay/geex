import { Link, List, ListItem, Typography } from "@mui/material"

import Icon from "../../components/Icon"
import { HeaderProps } from "../../components/Header"

const HeaderListItem: React.FC<HeaderProps> = ({ isActive }) => {
  return (
    <List sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '30px' }} disablePadding>
      <ListItem disablePadding>
        <Link href="/" underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
          <Icon name="home" />
          <Typography variant="body1" sx={{ color: isActive === '/' ? 'primary.contrastText' : 'primary.dark' }}>Лента</Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="/market" underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
          <Icon name="market" />
          <Typography variant="body1" sx={{ color: isActive === '/market' ? 'primary.contrastText' : 'primary.dark' }}>Маркетплейс</Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="/ratings" underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
          <Icon name="ratings" />
          <Typography variant="body1" sx={{ color: isActive === '/ratings' ? 'primary.contrastText' : 'primary.dark' }}>Рейтинги</Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="/champs" underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
          <Icon name="champ" />
          <Typography variant="body1" sx={{ color: isActive === '/champs' ? 'primary.contrastText' : 'primary.dark' }}>Соревнования</Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="/orgranizations" underline="none" sx={{ display: 'flex', alignItems: 'center', direction: 'row', gap: '10px' }}>
          <Icon name="organizations" />
          <Typography variant="body1" sx={{ color: isActive === '/organizations' ? 'primary.contrastText' : 'primary.dark' }}>Организации</Typography>
        </Link>
      </ListItem>
    </List>

  )
}

export default HeaderListItem
