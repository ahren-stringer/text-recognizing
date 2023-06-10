import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { QontoConnector, hh, steps } from '../../materialUI.config/steper_settings';
import './Stepper.css'

function Steper() {

  return (
    <Box className='pb-5' sx={{ paddingBottom: "78px !important;" }}>
      <Stepper alternativeLabel
        connector={null}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          let i = 1;
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                StepIconComponent={hh}
                sx={{fontSize: '1.25rem'}}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default Steper;
