import { CardContent, CardMedia, Card as MuiCard, Skeleton } from '@mui/material'

function getExtension(filename: string) {
  return filename.split(".").pop();
}

export const CardComponent = ({ image }: { image: string }) => (
  <MuiCard sx={{ minWidth: '250px' }}>
    {image ? 
      <CardMedia
        component={getExtension(image) === 'mp4' ? 'video' : 'img'}
        loading='lazy'
        image={image}
        alt="Image"
        autoPlay={getExtension(image) === 'mp4'}
        muted 
      /> : 
      <Skeleton 
        variant="rectangular" 
        height={230} 
      />
    }
    <CardContent>
        CardContent
    </CardContent>
  </MuiCard>
)

