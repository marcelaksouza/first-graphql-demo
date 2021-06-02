const graphql = require("graphql");
const Book = require('../models/book');
const {BookType , AuthorType } = require('./types')
const Author = require('../models/author');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

const Mutation = new GraphQLObjectType({
  name:"Mutation",
  fields:{

    addAuthor:{
      type: AuthorType,
      args: {
        name:{ type:new GraphQLNonNull(GraphQLString) },
        age:{ type:new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent,args){
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },

    addBook:{
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent,args){
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    },

    deleteBook:{
      type: BookType,
      args:{
        id:{ type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: async function (parent,args) {
        const deletedBook =  await Book.findByIdAndDelete(args.id)
        if(!deletedBook) {
          throw new Error('Error');
       }
       return deletedBook
      }
    },

    updateBook:{
      type: BookType,
      args:{
        id:{ type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID } 
      },
      resolve: async function (parent,args){

        let updateBookBoody = {};

        if(args.name){
          updateBookBoody.name = args.name; 
        }
        if(args.genre){
          updateBookBoody.genre = args.genre; 
        }
        if(args.authorId){
          updateBookBoody.authorId = args.authorId; 
        }

        const updateBookInfo = await Book.findByIdAndUpdate(args.id,updateBookBoody,{new: true});
        if(!updateBookInfo) {
            throw new Error('Error');
        }
        return updateBookInfo;
      }  
    }
  },
})

module.exports = Mutation;
