import {ReactNode, useState} from 'react';
import IframeItem from "./iframe";
import * as _ from "lodash";
import getParamsHook from "./utils/params";
import IframeFullGenerationItem from "./iframe/full-generation";

const App = (): ReactNode => {
    const [times, setTimes] = useState(1)
    const {test} = getParamsHook<{test: string}>()
    return (
        test ? <div><IframeFullGenerationItem/></div>
            : <div>
                <input type="number" className='bg-gray-700 p-2 text-white absolute' value={times}
                       onChange={e => setTimes(Number(e.target.value))}/>

                <div className='flex flex-row flex-wrap'>
                    {_.times(times).map((_, index) => <IframeItem key={index}/>)}

                </div>
            </div>
    )
        ;
};

export default App;
