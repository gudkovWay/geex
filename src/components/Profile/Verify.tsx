import { Box, Typography } from "@mui/material"
import Icon from "../Icon"

const Verify = ({ verified }: { verified: boolean }) => {
  return (
    <>
      {
        !verified && (
          <Box
            sx={{
              padding: ['0 8px', '8px 12px'],
              backgroundColor: '#353754',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              mt: '28px',
              width: ['295px', '380px']
            }}
          >
            <Icon name="info" />
            <Typography variant="h5" sx={{ color: 'primary.main', maxWidth: ['245px', '100%'] }}>Подтвердите личность для доступа к новым функциям</Typography>
          </Box>
        )
      }
    </>
  )
}

export default Verify
