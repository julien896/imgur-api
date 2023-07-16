import { CardContent, CardMedia, Card as MuiCard } from '@mui/material'

export const Card = ({ image }: { image: string}) => (
    <MuiCard>
      <CardMedia
        component="img"
        loading='lazy'
        image={image}
        alt="Image"
      />
      <CardContent>
        CardContent
      </CardContent>
    </MuiCard>
)

