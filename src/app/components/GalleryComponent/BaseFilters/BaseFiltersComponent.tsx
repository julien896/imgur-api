import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from "@mui/material";
import { BaseFilters } from "../../../models/Filters";


export const BaseFiltersComponent = ({ 
    handleChange,
    disabled
  } : { 
    handleChange: (filterName: keyof BaseFilters, value: any ) => void;
    disabled: boolean 
  }) => (
    <div className="base-filters">
      <FormControl fullWidth sx={{ height: '30px'}}>
        <InputLabel id="demo-simple-select-label">Section</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
        <InputLabel id="demo-simple-select-label">Window</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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

