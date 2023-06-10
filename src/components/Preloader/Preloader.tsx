import { CircularProgress } from '@mui/material';

function Preloader() {

    return (
        <div className='text-center'>
            <div className='pb-3 fw-semibold fs-4'>
                Подождите, идет обработка
            </div>
            <CircularProgress />
        </div>
    );
}

export default Preloader;
