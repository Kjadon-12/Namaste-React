import { sum } from "../sum"

test('sum function should calculate the sum of two numbers' , ()=>{


    const result = sum(2,2);
    //assertion
    expect(result).toBe(4);
})