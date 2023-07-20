import { CardContent, CardMedia, Card as MuiCard, Skeleton } from '@mui/material'

export const CardComponent = ({ 
    image,
    getImage,
    getExtension
  } : { 
    image: string;
    getImage: () =>  void;
    getExtension(filename: string): string | undefined
  }) => (
  <MuiCard 
    sx={{ minWidth: '250px' }}
    onClick={getImage}
  >
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

