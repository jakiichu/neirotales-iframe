import {ReactNode, useEffect} from 'react';
import IframeItem from "../index.tsx";
import {DEV_FRONT} from "../../constant/route";

const IframeFullGenerationItem = (): ReactNode => {
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log(event.data)
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    return (
        <div>
            <IframeItem asd={DEV_FRONT}/>
        </div>
    );
};

export default IframeFullGenerationItem;
