export default function combineResolvers(mocks = []) {
  return mocks.reduce(
    ({ Query: MemoQuery, Mutation: MemoMutation, ...memoTypes }, mock) => {
      const { Query = {}, Mutation = {}, ...types } = mock;

      return {
        Query: {
          ...MemoQuery,
          ...Query
        },
        Mutation: {
          ...MemoMutation,
          ...Mutation
        },
        ...memoTypes,
        ...types
      };
    },
    { Query: {}, Mutation: {} }
  );
}
