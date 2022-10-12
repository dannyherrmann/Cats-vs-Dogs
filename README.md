# Cat-Vs-Dog

a NSS project where we create a voting list of dogs and cats

## Description

A web app where you vote for the best dog picture against the best cat

## Getting Started
* set up json file (see below)
* in your terminal start serving the project
* in a seperate terminal (shell) serve your json server

### Dependencies

* create a .json file and paste in starter json code (below) for the website to function. 

### Installing

* before cloning the repo you will need to do the following first:
    * make sure you have a json server running. we recommend the following code
    ```
    json-server -p8088 -w catvsdog.json  <--this is whatever you name your .json server
    ```

### Executing program

* in github select the code dropdown and select SSH. 
* copy the code provided from there paste it into a folder we recommend a workspace folder.
* in your json server paste the following into your .json file. 
```
{
  "tally": [
    {
      "id": 1,
      "catVote": 0,
      "dogVote": 0
    }
  ],
  "users": [
    {
      "id":1,
      "name": "admin",
      "email": "admin@gmail.com",
      "password": "admin1234"
}],
    
  "dogObj": [],
  "catObj": []
}
```
*

## Help

* make sure that your json server is running before you serve the code on your local machine
* make sure that you are running your json server on port 8088
 
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

Danny Herrmann https://github.com/dannyherrmann 
Erica Clayton https://github.com/erica-clayton
Robert Stroud https://github.com/r-stroud
Stephen Rudge https://github.com/stephenrudge

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the [DannyMagic] License 

## Acknowledgments

* Nashville Software School 
    * instructors: Lynn Samuelson, Trevor Guinn, Sydney Noh
* Whoever created Visual studio Code























# Cats-vs-Dogs



##### to set this code up use the following code to get your json server loaded correctly  
```
{
  "tally": [
    {
      "id": 1,
      "catVote": 1,
      "dogVote": 0
    }
  ],
  "users": [
    {
      "id":1,
      "name": "admin",
      "email": "admin@gmail.com",
      "password": "admin1234"
}],
    
  "dogObj": [],
  "catObj": []
}
```
