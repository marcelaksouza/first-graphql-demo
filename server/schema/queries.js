const graphql = require("graphql");
const Book = require('../models/book');
const Author = require('../models/author');
const {BookType , AuthorType } = require('./types')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
  } = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      book: {
        type: BookType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Book.findById(args.id);
        },
      },
      author: {
        type: AuthorType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Author.findById(args.id);
        },
      },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return Book.find({})
        },
      },
      authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent, args) {
          return Author.find({})
        },
      },
    },
  });

  module.exports = RootQuery;