import type * as Eruda from 'eruda';

declare global {
    interface Window {
        eruda?: {init: ()=>void};
    }
}
export {}
