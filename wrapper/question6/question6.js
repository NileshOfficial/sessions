import { getUnique } from './filter';

export const uniqueLogger = () => {
    console.log(getUnique([1, 2, 3, 4, 5, 1, 2, 3, 4]));
}