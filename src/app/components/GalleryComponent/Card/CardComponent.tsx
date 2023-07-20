import { CardContent, CardMedia, Card as MuiCard, Skeleton } from '@mui/material'

export const CardComponent = ({ 
    image,
    description,
    getImage,
    getExtension
  } : { 
    image: string;
    description: string;
    getImage: () =>  void;
    getExtension(filename: string): string | undefined
  }) => (
  <MuiCard 
    className='card-container'
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
    {description && 
    <CardContent>
        {description}
    </CardContent>
    }
  </MuiCard>
)

