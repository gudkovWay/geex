import { CardActions, IconButton, Typography } from "@mui/material"

import { CardActionProps } from "./type"
import Icon from "../../components/Icon"

const actionStyles = {
  button: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '6px',
  },
}

const CustomButton: React.FC<{ icon: 'watch' | 'messages', count: number | string }> = ({ icon, count }) => (
  <IconButton disabled sx={actionStyles.button}>
    <Icon name={icon} />
    <Typography variant="body2" sx={{ color: 'primary.light' }}>{count}</Typography>
  </IconButton>
)

const UICardActions: React.FC<CardActionProps> = ({ watched, comments }) => (
  <CardActions disableSpacing sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', padding: 0, margin: '16px 0' }}>
    <CustomButton icon="watch" count={watched} />
    <CustomButton icon="messages" count={comments} />
  </CardActions>
)

export default UICardActions
