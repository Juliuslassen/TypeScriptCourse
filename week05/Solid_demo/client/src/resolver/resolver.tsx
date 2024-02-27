import { logger } from "./resolverlogger/utils";

type resolver = {
    parant: any,
    args: any,
    context: any,
    info: any
}

const query = {
    hello(parent: any, args: any, context: any, info: any) {
            const result = `${args}`  +' Hello World';
            return result;
        }

}

export const resolvers = {
    Hello: logger(query.hello)
}