import { Avatar, Drawer, Stack, IconButton, Box, Typography, Divider, Button, Container } from "@mui/material"

import { useMenu } from "../../context/Menu"
import Logo from "../Logo"
import Icon from "../../components/Icon"
import UIListItem from "../ListItem"
import { menuItems } from "../../shared/constants/list"

const Menu = () => {
  const { isMenuOpen, closeMenu } = useMenu()

  return (
    <Drawer
      anchor="right"
      open={isMenuOpen}
      onClose={closeMenu}
      PaperProps={{
        sx: { width: '100%', maxWidth: '100vw', position: 'absolute', top: 0, right: 0, overflow: 'hidden' }
      }}
    >
      <Container disableGutters sx={{ maxWidth: '375px', width: '343px' }}>
        <Stack direction="column">
          <Stack direction="row" sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', p: '6px 16px' }}>
            <Box sx={{ paddingTop: '6px' }}>
              <Logo />
            </Box>
            <IconButton onClick={closeMenu} sx={{ width: '40px', height: '40px', p: 0, }}>
              <Icon name='close' />
            </IconButton>
          </Stack>

          <Stack direction="column" sx={{ width: '343px', alignItems: 'center', justifyContent: 'center', p: '6px 16px' }}>
            <Stack direction="row" sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar src="/users/1.png" />
                <Typography>Профиль</Typography>
              </Box>
              <IconButton disabled sx={{ width: '40px', height: '40px', p: 0, }}>
                <Icon name='chevron' />
              </IconButton>
            </Stack>

            <Divider sx={{ width: '100%', backgroundColor: '#f1f3f7', mt: 1, mb: 1 }} />

            <Stack direction="column" sx={{width: '100%', gap:'8px', alignItems: 'flex-start', p: '6px 16px'}}>
              <UIListItem arr={menuItems} isActive="/" direction="column" />
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContenct: 'space-between' }}>
                <img src="/ru.png" alt="ru lang" />
                <Button
                  sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'primary.main', pr: '17px' }}
                  endIcon={<Icon name="chevron" />}
                >
                  <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>RU</Typography>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Drawer>
  )
}

export default Menu
