import {memo, ReactNode, useRef} from 'react';
import {PROD_FRONT} from "../constant/route";
import getParamsHook from "../utils/params";

interface IIframeItem{
    url?: string
}
interface IPageParams{
    sandbox?: string
    width?: string
    height?: string
}
const IframeItem = memo(({url = PROD_FRONT}: IIframeItem): ReactNode => {
    const ref = useRef(crypto.randomUUID());
    const {sandbox, height=420, width=800} = getParamsHook<IPageParams>()

   const params =  new URLSearchParams({
        iframe: "true",
        user_id: ref.current,
        theme: "dark"
    })
    return (
        <div className='flex justify-center py-8 *:rounded-2xl min-h-screen h-screen grow '>
            <iframe className='h-full min-h-full' sandbox={sandbox} width={Number(width)} height={Number(height)}
                    src={`${url}/mainGeneration?${params.toString()}`}/>
        </div>
    );
});

export default IframeItem;
