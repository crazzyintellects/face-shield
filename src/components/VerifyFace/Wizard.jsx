import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SaveIcon from '@material-ui/icons/Save';
import StepConnector from '@material-ui/core/StepConnector';



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#1A2980 0%,#26D0CE 50%,#0083B0 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#1A2980 0%,#26D0CE 50%,#0083B0 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #1A2980 0%, #26D0CE 50%, #0083B0 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const {  completed } = props;

  const icons = {
    1: <VisibilityIcon />,
    2: <AddAPhotoIcon />,
    3: <SaveIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
       // [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};


function getSteps() {
  return ['Allow Camera access', 'Click 3 photos', 'Save !'];
}


const Wizard = () => {
  const steps = getSteps();

  return (
    <div>
      <Stepper alternativeLabel connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label} completed>
            <StepLabel StepIconComponent={ColorlibStepIcon} completed>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default Wizard;
