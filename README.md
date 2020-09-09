# intvw-prob-one
Potentially Interview Question Template

#Dinosuar Matching

#### Task Summary
**Objective**: Build a browser application will match a dinosaur to the user based on inputs. Given the user's name and the user's favorite colour, the application will recommend a dinosaur and display an image of the dinosuar.

This should be built using a modern javascript library, such as Vue or React.

## Input Fields
### Name
**Type**: text

**Max Length**: 255

### Color
**Type**: Dropdown

**Min Number of Colors**: 5

## Logic
If the user's name is greater than 30 characters then they should be suggested a Brontosaurus.

If the user's name is greater than 15 characters and less than 20, and the user's favorite color is brown, yellow, or orange then they should be suggested a Triceratops.

If the user's name is greater than 10 and less than 20 characters, and the user's favorite color is red, blue, or pink, then they should be recommended a Torosaurus.

If the user's favorite color is green, no matter name length, the user should be recommended the Trex, 

All other situations, the users should be recommended the Stegasaurus. 

## Available Resources
### API
There's an API that exists to help you with this. Someone spent some time collecting a list of dinosuars and images.
```
http://dinomatch.roguewolf.tech/api/dinosuar
```
