import styled from "@emotion/styled";
import { StepConnector, StepIconProps, stepConnectorClasses } from "@mui/material";


// Connector - Соединитель

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: '25%',
      left: 'calc(-50% + 30px)',
      right: 'calc(50% + 30px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));


/*
* Step style
*/

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',

    backgroundColor:
      'rgba(25, 118, 210)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',

}));

// Step content

export function hh(props: StepIconProps){

    const { active, completed, className } = props;
  
    const icons: { [index: string]: number } = {
      1: 1,
      2: 2,
      3: 3,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  
}

/*
* Step Labels (Notes)
*/

export const steps: string[] = ['Выберите язык', 'Загрузите изображение', 'Переведите'];