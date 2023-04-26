import { SIZES, WIDTH } from '../constants';

function useMultiplyWidthScale(style={}) {
    Object.keys(style).forEach((key) => {
        if (typeof style[key] === 'object') {
            useMultiplyWidthScale(style[key]);
        } else if (key !== 'flex' && typeof style[key] === 'number' && !Object.values(SIZES).includes(style[key])) {
            style[key] *= WIDTH.widthScale;
        }
    });
    return style;
}

export default useMultiplyWidthScale;
