import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

// import FormInput from './FormInput'; 
const FormInput = ({ name, label, required }) => {

  const { control } = useFormContext();

  return (
    <>
      {/* <div>CustomTextField</div> */}
      <Grid item xs={14} sm={6}>

        <Controller
          as={TextField.name}
          control={control}
          fullWidth
          name={name}
          label={label}
          required={required}

          // error={isError}
        />

      </Grid>
    </>
  );
}

export default FormInput;