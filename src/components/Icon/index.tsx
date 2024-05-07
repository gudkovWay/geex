import { Champ, Chevron, Home, Market, Organizations, Ratings, User } from "./icons";

type IconName =
  | 'home'
  | 'user'
  | 'champ'
  | 'market'
  | 'ratings'
  | 'organizations'
  | 'chevron'

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
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = icons[name]

  return <IconComponent />
}

export default Icon
