import { Link, List, ListItem, Typography } from "@mui/material"

import Icon from "../../components/Icon"
import { menuItemsProps } from "../../shared/constants/list";


type UIListItemProps = {
  isActive: string;
  arr: menuItemsProps[]
  direction: 'row' | 'column'
}

const UIListItem: React.FC<UIListItemProps> = ({ isActive, arr, direction }) => {
  return (
    <List sx={{ display: 'flex', alignItems: `${direction === 'column' ? 'flex-start' : 'center'}`, width: `${direction === 'column' && '100%'}`, flexDirection: direction, gap: '30px' }} disablePadding>
      {arr.map(item => (
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

export default UIListItem
