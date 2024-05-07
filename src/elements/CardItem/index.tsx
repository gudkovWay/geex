import { Card, CardContent, Divider } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import UICardActions from "./CardActions"
import UICardContent from "./CardContent"
import Comments from "../Comments"
import { CardItemProps } from "./type"
import { CommentsProps } from "../Comments/type"

const CardItem: React.FC<CardItemProps> = ({ id, community, date, title, description, images, watched, comments }) => {
  const { isPending, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios
        .get('comments.json')
        .then(res => res.data.filter((comment: CommentsProps) => comment.postId === id)),
  })

  if (isPending) return <div>Loading</div>

  return (
    <Card sx={{ margin: '26px 0', borderRadius: '20px', maxWidth: '765px', padding: '28px 24px', boxShadow: '0' }}>

      <UICardContent
        community={community}
        date={date}
        title={title}
        description={description}
        images={images}
      />
      <UICardActions
        watched={watched}
        comments={comments}
      />

      <Divider sx={{backgroundColor: '#f1f3f7' }}/>
      <CardContent sx={{padding: '0'}}>
        {data.map((comment: CommentsProps) => (
          <Comments
            key={comment.id}
            id={comment.id}
            postId={comment.postId}
            userId={comment.userId}
            text={comment.text}
            date={comment.date}
            children={comment.children}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default CardItem
