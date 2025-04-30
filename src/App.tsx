import {ReactNode, useState} from 'react';
import IframeItem from "./iframe";
import getParamsHook from "./utils/params";
import IframeFullGenerationItem from "./iframe/full-generation";
import {times} from "lodash";

interface IPageParams{
    test: string
}
const initialStateTimesItems = 1

const App = (): ReactNode => {
    const [timesItems, setTimesItems] = useState(initialStateTimesItems)
    const {test} = getParamsHook<IPageParams>()

    return (
        <div className='min-h-screen min-w-screen'>
            {test ? <IframeFullGenerationItem/>
                :
                <>
                    <input type="number" className='bg-gray-700 p-2 text-white absolute' value={timesItems}
                           onChange={e => setTimesItems(Number(e.target.value))}/>

                    <div className='flex flex-row flex-wrap'>
                        {times(timesItems).map((_, index) => <IframeItem key={index}/>)}

                    </div>
                </>
            }
        </div>


)
    ;
};

export default App;
