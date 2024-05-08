import * as Icons from "./icons";

type IconName =
  | 'add'
  | 'all'
  | 'close'
  | 'champ'
  | 'chevron'
  | 'home'
  | 'info'
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
  | 'share'
  | 'watch'
  | 'user'
  | 'original'

interface IconProps {
  name: IconName
}

const icons: Record<IconName, React.FC> = {
  'add': Icons.Add,
  'all': Icons.All,
  'close': Icons.Close,
  'chevron': Icons.Chevron,
  'champ': Icons.Champ,
  'home': Icons.Home,
  'info': Icons.Info,
  'organizations': Icons.Organizations,
  'original': Icons.Original,
  'market': Icons.Market,
  'menu': Icons.Menu,
  'messages': Icons.Messages,
  'movie': Icons.Movie,
  'notification': Icons.Notification,
  'ratings': Icons.Ratings,
  'results': Icons.Results,
  'rewards': Icons.Rewards,
  'ru': Icons.Ru,
  'share': Icons.Share,
  'watch': Icons.Watch,
  'user': Icons.User,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]

  return <IconComponent />
}

export default Icon
