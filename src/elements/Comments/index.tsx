import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Avatar, Button, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"

import { CommentsProps, UserProps } from "./type"

const Comments: React.FC<CommentsProps> = ({ postId, userId, id, text, date, children }) => {
  const { isPending, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios
        .get('users.json')
        .then(res => res.data),
  })
  const filteredUserData = useMemo(() => data?.filter((user: UserProps) => user.id === userId), [data, userId]);

  if (isPending) return <div>Loading...</div>
  if (!data) return null

  return (
    <Container maxWidth="xl" disableGutters sx={{ marginTop: '16px' }}>
      {filteredUserData.map((user: UserProps) => (
        <Box key={user.id} sx={{ display: 'flex', gap: '12px', padding: '0' }}>
          <Avatar src={user.avatar} />
          <Box>
            <Typography variant="body2" sx={{ color: 'primary.light' }}>{`${user.name} ${user.surname}`}</Typography>
            <Typography variant="body1" sx={{ color: 'primary.contrastText' }}>{text}</Typography>
            <Typography variant="body2" sx={{ color: 'primary.light' }}>
              {date}
              <Button sx={{ color: '#353754', fontWeight: '548', fontSize: '14px', textTransform: 'none' }} variant="text">
                Ответить
              </Button>
            </Typography>

            {children && children.map((childComment) => (
              <Comments key={childComment.id} {...childComment} />
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  )
}

export default Comments
