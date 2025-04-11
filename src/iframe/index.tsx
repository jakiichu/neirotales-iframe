import {memo, ReactNode, useRef} from 'react';
import {PROD_FRONT} from "../constant/route";
import getParamsHook from "../utils/params";

interface IIframeItem{
    url?: string
}
interface IPageParams{
    sandbox?: string
}
const IframeItem = memo(({url = PROD_FRONT}: IIframeItem): ReactNode => {
    const ref = useRef(crypto.randomUUID());
    const {sandbox} = getParamsHook<IPageParams>()

   const params =  new URLSearchParams({
        iframe: "true",
        user_id: ref.current,
        theme: "dark"
    })
    return (
        <div>
            <iframe sandbox={sandbox} width={420} height={800}
                    src={`${url}/mainGeneration?${params.toString()}`}/>
        </div>
    );
});

export default IframeItem;
