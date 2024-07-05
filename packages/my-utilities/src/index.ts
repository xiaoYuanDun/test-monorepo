import _get from 'lodash/get';

export const getRandom = () => Math.random() + _get(window, 'name')
