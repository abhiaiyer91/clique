module.exports = {
  parser: 'babel-eslint',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJson: require('./src/queries/schema.json'),
      },
    ],
  },
  plugins: ['graphql'],
};
