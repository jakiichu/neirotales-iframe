import {ReactNode, useEffect} from 'react';

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
            <iframe width={420} height={800}
                    src={`https://iframe.kion.neurotales.ipst-dev.com/mainGeneration?iframe=true&theme=dark&user_id=404`}/>
        </div>
    );
};

export default IframeFullGenerationItem;
