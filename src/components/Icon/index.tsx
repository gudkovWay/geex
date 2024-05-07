import { Champ, Chevron, Home, Market, Messages, Organizations, Ratings, User, Watch } from "./icons";

type IconName =
  | 'home'
  | 'user'
  | 'champ'
  | 'market'
  | 'ratings'
  | 'organizations'
  | 'chevron'
  | 'watch'
  | 'messages'

interface IconProps {
  name: IconName
}

const icons: Record<IconName, React.FC> = {
  'home': Home,
  'user': User,
  'champ': Champ,
  'market': Market,
  'ratings': Ratings,
  'organizations': Organizations,
  'chevron': Chevron,
  'watch': Watch,
  'messages': Messages,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]

  return <IconComponent />
}

export default Icon
