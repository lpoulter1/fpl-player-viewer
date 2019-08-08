# FPL Player Comparison tool.

To start the application;

`npm install` 

then

`npm start`

To run tests

`npm run test`

## Usage

Enter players you want to compare into the select box.

![Image](../master/usage-example.png?raw=true)

## Approach
I choose to take the opportunity to work with a few technologies new to me. 
Namely Google Cloud and the Nivo charting library. 

##### Data
I wanted to use the [Fantasy Premier League API](https://fantasy.premierleague.com/api/bootstrap-static/) to compare players. 
Unfortunately the API does not support CORS requests. So I wrote and hosted a Google Cloud function.
This acts as a proxy allow CORS requests. 

##### Tech choices
I used React to demonstrate my familiarity with it. I find Jest is very easy to use and has great documentation.
I could have used Create React App but have been meaning to create [my own React template](https://github.com/lpoulter1/React-Webpack-Babel---Template) 
so wrote one and used that as a template for the project.
 

## Future Work
I ran out of time to complete all I wanted. Things I'd like to add, in rough order of importance.
* More tests. I tested one function as an example but more are needed 
especially for the other data manipulation methods.
* Better error handling. A React Error Boundary would be a good add.
* Look at the time complexity of some of the functions. 
Performance is fine for now but improvements could be made by reducing array looping in some places.
* More chart types. It should be easy enough to add more chart types using the helper methods.
* It would be nice to be able to select which stats you want to compare.