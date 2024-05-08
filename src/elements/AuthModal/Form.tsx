import { Stack, Box, Typography, TextField, InputAdornment, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

import Icon from "../../components/Icon";
import { useAuthModal } from "../../context/Auth";
import { style } from "./style";


const UIForm = () => {
  const { closeAuthModal } = useAuthModal()
  const navigate = useNavigate()

  const handleClick = () => {
    closeAuthModal()
    navigate('/user')
  }

  return (
    <Box sx={style}>
      <Stack direction="column" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', p: [3, 0] }}>

        <Stack direction="column" sx={{ alignItems: 'center', mb: '32px' }}>
          <img src='/avatar.png' alt='Logotype' style={{ width: '50px', height: '50px', marginBottom: '24px' }} />
          <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: 'primary.contrastText', mb: '16px' }}>
            Вход на платформу
          </Typography>
          <Typography id="modal-modal-description" variant="body2" sx={{ color: 'primary.dark', textAlign: 'center' }}>
            Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
          </Typography>
        </Stack>

        <Stack direction="column" sx={{ width: '100%', alignItems: 'flex-start', gap: '24px' }}>
          <Box sx={{ width: '100%' }}>
            <TextField
              disabled
              id="standard-disabled"
              label="Номер телефона"
              defaultValue="+7 (800) 555-35-35"
              variant="standard"
              sx={{ width: '100%', input: { color: 'primary.dark', fontSize: '14px', fontWeight: '500', WebkitTextFillColor: '#9395b8 !important' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon name="ru" />
                  </InputAdornment>
                ),
                disableUnderline: true,
                style: {
                  border: 'none',
                  color: '#9395b8 !important',
                  background: '#f1f3f7',
                  width: '100%',
                  borderRadius: '10px',
                  padding: '10px'
                }
              }}
              InputLabelProps={{
                sx: { color: '#9395b8 !important', fontSize: '12px', fontWeight: '400' }
              }}
            />
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{ width: '100%', mt: 3, backgroundColor: 'primary.contrastText', color: 'primary.main', fontSize: '14px', fontWeight: '548', boxShadow: '0', textTransform: 'none', borderRadius: '10px' }}
            >
              Авторизоваться
            </Button>
          </Box>
        </Stack>

        <Stack direction="column" sx={{ width: '100%', mt: 5, alignItems: 'center', gap: '16px' }}>
          <Typography>Нет аккаунта?</Typography>
          <Button
            sx={{ width: '100%', backgroundColor: '#f1f3f7', color: '#06082C !important', fontSize: '14px', fontWeight: '548', boxShadow: '0', textTransform: 'none', borderRadius: '10px' }}
            variant="contained"
            disabled
          >Зарегистрироваться</Button>
        </Stack>

      </Stack>
    </Box>

  )
}
export default UIForm
