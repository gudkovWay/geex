import { AppBar, Box, Button, ButtonGroup, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import { Container, useMediaQuery } from "@mui/system"

import HeaderListItem from "../../elements/ListItem"
import Icon from "../Icon"

export interface HeaderProps {
  isActive: string
}

const Header: React.FC<HeaderProps> = ({ isActive }) => {
  const isMobile = useMediaQuery('(min-width: 950px)')

  return (
    <AppBar sx={{ boxShadow: '0', backgroundColor: 'primary.main' }} position="static">
      <Container maxWidth="xl" disableGutters>
        <Stack direction="row" sx={{ padding: '10px 16px', justifyContent: "space-between" }}>
          {!isMobile ? (
            <>
              <img src="/logo.svg" alt="logo" />
              <IconButton>
                <Icon name="menu" />
              </IconButton>
            </>
          ) : (
            <>
              <Toolbar sx={{ padding: '0', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px' }} disableGutters>
                <img src="/logo.svg" alt="logo" />
                <HeaderListItem isActive={isActive} />
              </Toolbar>
              <ButtonGroup disableRipple>
                <Stack direction="row" alignItems="center">

                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContenct: 'space-between' }}>
                    <img src="/ru.png" alt="ru lang" />
                    <Button
                      sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '4px', backgroundColor: 'primary.main' }}
                      endIcon={<Icon name="chevron" />}
                    >
                      <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>RU</Typography>
                    </Button>
                  </Box>
                  <IconButton sx={{ backgroundColor: '#f1f3f7', hover: { backgroundColor: '#f1f3f7' }, width: 40, height: 40, borderRadius: '10px', padding: 0 }}>
                    <Icon name="user" />
                  </IconButton>
                </Stack>
              </ButtonGroup>
            </>
          )}
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Header
