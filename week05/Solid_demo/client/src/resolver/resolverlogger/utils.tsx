
//decorator
export const logger = (resolver: any) => {
    return async (parent: any, args: any, context: any, info: any) => {
        console.log('Logging the resolver');
        const result = await resolver(parent, args, context, info);
        return result;
    }
}