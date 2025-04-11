import {memo, ReactNode, useRef} from 'react';
import {PROD_FRONT} from "../constant/route";

interface IIframeItem{
    asd?: string
}

const IframeItem = memo(({asd = PROD_FRONT}: IIframeItem): ReactNode => {
    const ref = useRef(crypto.randomUUID());

   const params =  new URLSearchParams({
        iframe: "true",
        user_id: ref.current,
        theme: "dark"
    })
    return (
        <div>
            <iframe width={420} height={800}
                    src={`${asd}/mainGeneration?${params.toString()}`}/>
        </div>
    );
});

export default IframeItem;
