import { Typography, Button, Stack, Skeleton, Box, Avatar, IconButton } from "@mui/material"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { bull } from "../../utils/bull";
import Icon from "../Icon";
import { containerStyles, titleStyles } from "./style";

interface SubscribeProps {
  id: number,
  name: string,
  avatar: string,
  category: string,
  title: string,
  original: boolean
}

const Aside = () => {
  const { isPending, data } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () =>
      axios
        .get('subscribes.json')
        .then(res => res.data)
  })

  if (isPending) return <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

  return (
    <Stack direction="column" sx={containerStyles}>
      <Typography variant="h3" sx={titleStyles}>
        Интересные подписки
      </Typography>
      <Stack direction="column" sx={{ width: "100%", gap: "12px", padding: '0', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        {data.map((item: SubscribeProps) => (
          <Stack key={item.id} direction="row" sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" sx={{ gap: '10px' }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar src={item.avatar} sx={{ width: '41px', height: '41px', borderRadius: '100px' }} />
                <img src="/ru.png" alt="ru" style={{ position: 'absolute', bottom: '0', right: '0', width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #eee' }} />
              </Box>
              <Stack direction="column" sx={{ gap: '5px', }}>
                <Typography variant="body1" sx={{ pl: '3px', color: 'primary.contrastText', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body1" component="span">{item.name}</Typography>
                  {item.original && <Icon name="original" />}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
                  {item.category} {bull} {item.title.length > 19 ? item.title.slice(0, 18) + '...' : item.title}
                </Typography>
              </Stack>
            </Stack>
            <IconButton sx={{ backgroundColor: '#f1f3f7', borderRadius: '10px' }}>
              <Icon name="add" />
            </IconButton>
          </Stack>
        ))}
        <Button variant="contained" sx={{ fontSize: '14px', fontWeigth: '548', color: 'primary.contrastText', backgroundColor: '#f1f3f7', borderRadius: '10px', width: '100%', textTransform: 'none', boxShadow: '0' }}>
          Смотреть всех
        </Button>
      </Stack>
    </Stack>
  );
};

export default Aside;
