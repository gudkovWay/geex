import * as Icons from "./icons";

type IconName =
  | 'all'
  | 'close'
  | 'champ'
  | 'chevron'
  | 'home'
  | 'organizations'
  | 'market'
  | 'menu'
  | 'messages'
  | 'movie'
  | 'notification'
  | 'ratings'
  | 'results'
  | 'rewards'
  | 'ru'
  | 'watch'
  | 'user'

interface IconProps {
  name: IconName
}

const icons: Record<IconName, React.FC> = {
  'all': Icons.All,
  'close': Icons.Close,
  'chevron': Icons.Chevron,
  'champ': Icons.Champ,
  'home': Icons.Home,
  'organizations': Icons.Organizations,
  'market': Icons.Market,
  'menu': Icons.Menu,
  'messages': Icons.Messages,
  'movie': Icons.Movie,
  'notification': Icons.Notification,
  'ratings': Icons.Ratings,
  'results': Icons.Results,
  'rewards': Icons.Rewards,
  'ru': Icons.Ru,
  'watch': Icons.Watch,
  'user': Icons.User,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]

  return <IconComponent />
}

export default Icon
