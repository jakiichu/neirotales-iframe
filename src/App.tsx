import {ReactNode, useState} from 'react';
import IframeItem from "./iframe";
import * as _ from "lodash";

const App = (): ReactNode => {
    const [times, setTimes] = useState(1)
    return (
        <div>
            <input type="number"  className='bg-gray-700 p-2 text-white absolute' value={times} onChange={e => setTimes(Number(e.target.value))}/>

            <div className='flex flex-row'>
                {_.times(times).map((_, index) => <IframeItem key={index}/>)}

            </div>
        </div>
    );
};

export default App;
