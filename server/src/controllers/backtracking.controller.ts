import { get, param, HttpErrors, post, requestBody, getModelSchemaRef } from '@loopback/rest';
const solve = require("./utils");
import { SolutionState } from '../models';

interface Response {
  solution: string
}
interface solutionState {
  array: string,
  sum: string,
  solution: string
}


export class BacktrackingController {
  constructor(
  ) { }

  @post('/solve')
  async solve(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolutionState),
        },
      },
    })
    question: solutionState
  ): Promise<Response> {
    let a: number[] = JSON.parse(question.array);
    let ans: number[] = [];
    let psf: number[] = [];
    solve(a, question.sum, 0, ans, psf);
    let solution: string = JSON.stringify(ans);
    return { solution }

  }
}
