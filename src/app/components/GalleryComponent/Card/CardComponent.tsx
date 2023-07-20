import { CardContent, CardMedia, Card as MuiCard, Skeleton } from '@mui/material'
import { CardType } from './CardType'

export const CardComponent = ({ 
    image,
    description,
    getImage,
    getExtension
  } : CardType) => (
  
  <MuiCard 
    data-testid="card-container"
    className='card-container'
    onClick={getImage}
  >
    {image ? 
      <CardMedia
        component={getExtension(image) === 'mp4' ? 'video' : 'img'}
        loading='lazy'
        srcSet=''
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

