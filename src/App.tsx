import {ReactNode, useRef} from 'react';

const App = (): ReactNode => {
    const ref = useRef(crypto.randomUUID());
    return (
        <div>
            <iframe width={420} height={1200}
                    src={`https://iframe.kion.neurotales.ipst-dev.com/mainGeneration?iframe=true&user_id=${ref.current}`}></iframe>
        </div>
    );
};

export default App;
