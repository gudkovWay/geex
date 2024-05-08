export interface CardContentProps {
  community: string,
  date: string,
  title: string,
  description: string,
  images: string[],
  tags?: string[],
}

export interface CardActionProps {
  watched: string,
  comments: number
}

export interface CardItemProps extends CardContentProps, CardActionProps {
  id: number,
}
