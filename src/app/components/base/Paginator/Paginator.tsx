import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import { PaginatorType } from './PaginatorType';

export const Paginator = ({ 
    handlePrev,
    handleNext,
    current,
    disabled
} : PaginatorType ) => (
    <div className='paginator'>
      <div>
        {current > 1 && 
        <Button disabled={disabled} onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </Button>
        }
      </div>
      <div>
        <Button disabled={disabled} onClick={handleNext}>
          <ArrowForwardIosIcon />
        </Button>  
      </div>
    </div>
  )

