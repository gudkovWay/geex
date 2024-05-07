import { All, Champ, Chevron, Home, Market, Messages, Movie, Organizations, Ratings, Results, Rewards, User, Watch } from "./icons";

type IconName =
  | 'all'
  | 'champ'
  | 'chevron'
  | 'home'
  | 'organizations'
  | 'market'
  | 'messages'
  | 'movie'
  | 'ratings'
  | 'results'
  | 'rewards'
  | 'watch'
  | 'user'

interface IconProps {
  name: IconName
}

const icons: Record<IconName, React.FC> = {
  'all': All,
  'chevron': Chevron,
  'champ': Champ,
  'home': Home,
  'organizations': Organizations,
  'market': Market,
  'messages': Messages,
  'movie': Movie,
  'ratings': Ratings,
  'results': Results,
  'rewards': Rewards,
  'watch': Watch,
  'user': User,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]

  return <IconComponent />
}

export default Icon
