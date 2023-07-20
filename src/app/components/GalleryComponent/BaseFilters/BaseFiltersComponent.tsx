import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from "@mui/material";
import { BaseFiltersType } from "./BaseFiltersType";


export const BaseFiltersComponent = ({ 
    handleChange,
    disabled
  } : BaseFiltersType ) => (
    <div className="base-filters">
      <FormControl fullWidth sx={{ height: '30px'}}>
        <InputLabel id="section-select-label" aria-label="Section">Section</InputLabel>
        <Select
          aria-labelledby="section-select-label"
          label="Section"
          disabled={disabled}
          onChange={(e) => handleChange('section', e.target.value as string)}
        >
          <MenuItem value='hot'>Hot</MenuItem>
          <MenuItem value='top'>Top</MenuItem>
          <MenuItem value='user'>User</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="sort-select-label" aria-label="Sort">Sort</InputLabel>
        <Select
          aria-labelledby="sort-select-label"
          label="Sort"
          disabled={disabled}
          onChange={(e) => handleChange('sort', e.target.value as string)}
        >
          <MenuItem value='viral'>Viral</MenuItem>
          <MenuItem value='top'>Top</MenuItem>
          <MenuItem value='time'>Time</MenuItem>
          <MenuItem value='time'>Rising</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="window-select-label" aria-label="Window">Window</InputLabel>
        <Select
          aria-labelledby="window-select-label"
          label="Window"
          disabled={disabled}
          onChange={(e) => handleChange('window', e.target.value as string)}
        >
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='day'>Day</MenuItem>
          <MenuItem value='week'>Week</MenuItem>
          <MenuItem value='month'>Month</MenuItem>
          <MenuItem value='year'>Year</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel 
        className="viral-switch"
        control={
          <Switch 
            onChange={(e) => handleChange('showViral', e.target.checked.toString())} 
            disabled={disabled}
          />
        } 
        label="Show Viral" 
      />
    </div>

)

