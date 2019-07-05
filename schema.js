const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
require("es6-promise").polyfill();
require("isomorphic-fetch");

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_sucess: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const response = await fetch("https://api.spacexdata.com/v3/launches");
        const data = await response.json();
        return data;
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const response = await fetch(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        );
        const data = await response.json();
        return data;
      }
    },
    rockets: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const response = await fetch("https://api.spacexdata.com/v3/rockets");
        const data = await response.json();
        return data;
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const response = await fetch(
          `https://api.spacexdata.com/v3/rockets/${args.rocket_id}`
        );
        const data = await response.json();
        return data;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
