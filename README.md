# Frontend Boilerplate
A react boilerplate with tools used like typescript, styled components etc

![Boilerplate: History's Mechanical Marvel](http://timetunnel.bigredhair.com/boilerplate/BP-comic.jpg)

### setup

install node (>=12) and yarn 

1. `yarn install` - installs all dependencies

2. `yarn start` and got to localhost:1234 to see your project running.


### commands

1. `yarn start` - runs server is dev mode
2. `yarn build` - builds and bundles frontend package and store in `dist`
3. `yarn tcheck` - typechecks
4. `yarn create-component NewComponent` - use this command to add a new component.


### Use cases

User will come select the folder path with images that he wants to label.

They would be able to see images that are not labelled, he would be able to select a section in the image and a form pops up with the fields that he wanted to label for. 

When they press done, a new unlabelled image is shown. 

All the annotations are saved in a csv. and csv files are regularly committed.


### Tasks

[] select a folder with images. load all the images and display it in some form.

[] allow activites on images. User should be able to select a section and form should open. On pressing done, a new image should show up.

[] add actions on form submit and save the data. 
