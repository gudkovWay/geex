import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Container, Box, Stack, Typography, Skeleton } from "@mui/material"

import BaseInfo from "./BaseInfo"
import Verify from "./Verify"
import UIButtons from "./Buttons"
import Aside from "./Aside"

const Profile = () => {
  const { isPending, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      axios
        .get('profile.json')
        .then(res => res.data)
  })

  if (isPending) return <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

  return (
    <Container maxWidth="xl" disableGutters sx={{ mt: 3 }}>
      <Stack
        display="flex"
        sx={{
          flexDirection: ["column", "column", "row"],
          alignItems: ["center", "center", "flex-start"],
          justifyContent: "space-between",
          gap: "24px"
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: ["100%", "765px"],
            maxWidth: ["100%", "765px"],
            alignItems: ['center', 'flex-start'],
            backgroundColor: 'primary.main',
            borderRadius: '20px',
            padding: '24px 20px'
          }}
        >
          <BaseInfo
            name={data.name}
            surname={data.surname}
            avatar={data.avatar}
            country={data.country}
            subscribers_avatars={data.subscribers_avatars}
            subscribers={data.subscribers}
            subscriptions_avatars={data.subscriptions_avatars}
            subscriptions={data.subscriptions}
          />

          <Verify verified={data.verified} />

          <Stack sx={{ gap: '10px', flexDirection: ['column', 'row'], mt: '40px' }}>
            <Box sx={{ width: ['271px', '100%'], backgroundColor: '#f8f8f9', borderRadius: '12px', display: 'flex', flexDirection: 'column', p: '14px 12px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <Typography variant="body2" sx={{ color: 'primary.dark' }}>День Рождения</Typography>
              <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>{data.birthdate}</Typography>
            </Box>
            <Box sx={{ width: ['271px', '100%'], backgroundColor: '#f8f8f9', borderRadius: '12px', display: 'flex', flexDirection: 'column', p: '14px 12px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <Typography variant="body2" sx={{ color: 'primary.dark' }}>Номер телефона</Typography>
              <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>{data.phoneNumber}</Typography>
            </Box>
          </Stack>

          <UIButtons />
        </Stack>

        <Aside />

      </Stack>
    </Container>

  )
}

export default Profile
