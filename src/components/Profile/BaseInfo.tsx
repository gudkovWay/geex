import { Avatar, Box, Stack, Typography } from '@mui/material';
import Icon from '../Icon';

interface SubscribersListProps {
  avatars: string[],
  text: string,
  amount: number,
}

interface BaseInfoProps {
  name: string,
  surname: string,
  avatar: string,
  country: string,
  subscribers_avatars: string[],
  subscribers: number,
  subscriptions: number,
  subscriptions_avatars: string[],
}

const AvatarList = ({ avatars }: { avatars: string[] }) => (
  <Stack direction="row" spacing={-1.2}>
    {avatars.map((avatar, index) => (
      <Avatar
        key={index}
        src={avatar}
        sx={{ width: '22px', height: '22px', zIndex: avatars.length - index }} />
    ))}
  </Stack>
);

const SubscribersList: React.FC<SubscribersListProps> = ({ avatars, amount, text }) => (
  <Box sx={{ display: 'flex', alignItems: ['flex-start','center'], gap: '8px', flexDirection: ['column', 'column', 'row'] }}>
    <Box sx={{ display: 'flex', alignItems: ['flex-start','center'], justifyContent: ['flex-start', 'center'], position: 'relative' }}>
      <AvatarList avatars={avatars} />
    </Box>
    <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
      {amount}
      <Typography component="span" sx={{ color: "primary.dark", ml: '6px' }}>
        {text}
      </Typography>
    </Typography>
  </Box>

)

const BaseInfo: React.FC<BaseInfoProps> = ({ name, surname, avatar, country, subscribers_avatars, subscribers, subscriptions, subscriptions_avatars }) => {
  return (
    <Stack direction="column" sx={{ gap: 2, alignItems: ['center', 'flex-start'] }}>
      <Avatar src={avatar} sx={{ width: '140px', height: '140px', borderRadius: '350px' }} />
      <Stack sx={{ gap: '12px', alignItems: ['center', 'flex-start'] }}>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'primary.dark' }}>
          <Icon name="ru" />
          {country}
        </Typography>

        <Typography variant="h2" sx={{ color: 'primary.contrastText' }}>
          {`${name} ${surname}`}
        </Typography>

        <Stack direction="row" sx={{ alignItems: 'center', gap: '32px', mt: '36px' }}>
          <SubscribersList avatars={subscribers_avatars} amount={subscribers} text="Подписчики" />
          <SubscribersList avatars={subscriptions_avatars} amount={subscriptions} text="Подписки " />
        </Stack>

      </Stack>
    </Stack>

  )
}

export default BaseInfo
