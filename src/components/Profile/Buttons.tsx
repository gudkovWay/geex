import { Button, IconButton, Stack } from "@mui/material"
import Icon from "../Icon"

const UIButtons = () => (
  <Stack direction="row" sx={{ mt: '40px', alignItems: 'center', gap: '10px' }}>
    <Button variant="contained" sx={{ backgroundColor: 'primary.contrastText', color: 'primary.main', p: '10px 24px', width: ['245px', '149px'], height: '40px', fontSize: '14px', fontWeight: '548', textTransform: 'none', borderRadius: '10px', boxShadow: '0' }}>
      Редактировать
    </Button>
    <IconButton sx={{ backgroundColor: '#f1f3f7', width: '40px', height: '40px', borderRadius: '10px' }}>
      <Icon name="share" />
    </IconButton>
  </Stack>

)

export default UIButtons
