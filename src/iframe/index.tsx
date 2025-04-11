import {memo, ReactNode, useRef} from 'react';

const IframeItem = memo((): ReactNode => {
    const ref = useRef(crypto.randomUUID());

    return (
        <div>
            <iframe width={420} height={800}
                    src={`https://iframe.kion.neurotales.ipst-dev.com/mainGeneration?iframe=true&user_id=${ref.current}&theme=dark`}/>
        </div>
    );
});

export default IframeItem;
