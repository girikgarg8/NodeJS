import {helper} from './helper-service.js'

export const execute = () => {
    const result = helper();
    if (result) {
        return "Learning"
    }
    else {
        return "Learning ReactJS"
    }
}
