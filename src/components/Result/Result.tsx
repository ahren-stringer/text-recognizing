import { useContext } from 'react';
import { RecognizeContext } from '../../App';
import Preloader from '../Preloader/Preloader';
import RestartButton from '../Button/RestartButton';

function Result() {

    let recognize = useContext(RecognizeContext);

    return (
        <>
            {(!recognize?.result && recognize?.isLoading) || (recognize?.result && !recognize?.isLoading)
                ?
                <div>
                    <div className="result__restart mb-3">

                        {recognize?.isLoading ?
                            null
                            : <RestartButton />}

                    </div>
                    <div className='border border-secondary bg-light mb-5'>
                        <div className='px-2 pt-3 pb-5' >

                            {recognize?.isLoading ?
                                <Preloader />
                                : recognize?.result}

                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    );
}

export default Result;
