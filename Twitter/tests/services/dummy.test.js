import {execute} from "../../src/services/dummy-service.js"
import {helper} from "../../src/services/helper-service.js"

jest.mock('../../src/services/helper-service.js'); //mocking the entire file

test('Result is true and learning JS',()=>{ //the first parameter is the name of the test, second one is the callback function which defines the test
    //implementation of test
    helper.mockReturnValue(true);
    const result=execute();
    expect(result).toBe('Learning')
})

test('Result is false and returns Learning ReactJS', () => { 
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJS')
})