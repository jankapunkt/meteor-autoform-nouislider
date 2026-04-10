# History
This meteor package is a fork of [elevatedevdesign:autoform-nouislider](https://github.com/ElevateDev/meteor-autoform-nouislider). I forked it to make it compatible with meteor 1.3 and fix some bugs.


## Release Notes

### 0.3
- Bug fixed: start and range options set in schema definition was overwritten
- Removed dependency on wrapper package `rcy:nouislider`

### 0.4
- Bug fixed: "Slider was already initialized" error fixed

### 0.4.1
- Update AutoForm to 6.0.0, other dependencies also updated to recent version
- Code is now [Javascript standard style](https://standardjs.com/)
- Some ES5 syntax updated to ES6

### 0.5
- Update nouislider to 14.0.2
- Removed underscore dependency

### 0.5.1
- prevent potential jump effect on reactive computations in cases, where documents are edited (update form) and a new 
slider value has been set
- fix start value on the slider was set to 0 when editing a document with a given value

### 0.6.0
- import package dynamically or statically
- support `disabled` state
