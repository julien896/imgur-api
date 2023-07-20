import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { BaseFilters } from '../../../models/Filters';
import { Button } from '@mui/material';

export const Paginator = ({ 
    handlePrev,
    handleNext,
    current,
    disabled
} : {
    handlePrev: () => void;
    handleNext: () => void;
    current: number;
    disabled: boolean
}) => (
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

