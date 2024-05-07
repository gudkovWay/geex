export interface UserProps {
  id: number,
  name: string,
  surname: string,
  avatar: string
}

export interface CommentsProps {
  postId: number,
  userId: number,
  id: number,
  text: string,
  date: string,
  children?: CommentsProps[]
}
