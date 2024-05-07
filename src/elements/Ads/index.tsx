import { Skeleton, Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import UIAds from "./Ads"
import Filter from "./Filter"

const Ads = () => {
  const { isPending, data } = useQuery({
    queryKey: ["ads"],
    queryFn: () =>
      axios
        .get('ads.json')
        .then(res => res.data)
  })

  if (isPending) return <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

  return (
    <Stack
      direction="column"
      sx={{ justifyContent: "flex-start", alignItems: "flex-start", gap: "24px", maxWidth: '370px' }}
    >
      <Filter />
      <UIAds
        id={data.id}
        image={data.image}
      />
    </Stack>
  )
}

export default Ads
