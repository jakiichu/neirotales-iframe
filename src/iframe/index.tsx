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
        <div>
            <iframe style={{backgroundColor: '#163053'}} sandbox={sandbox} width={Number(width)} height={Number(height)}
                    src={`${url}/mainGeneration?${params.toString()}`}/>
        </div>
    );
});

export default IframeItem;
