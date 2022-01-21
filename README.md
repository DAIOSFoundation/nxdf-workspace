node 16.13.1

#### Please use yarn. don't use npm.
#### Run command in the root folder.
`yarn install`

## apps
### run artistella
`npx nx serve artistella`

### run sktaing4u
ios: `npx nx run-ios staking4u`  
android: `npx nx run-android staking4u`

### run soldrops
`npx nx serve soldrops`

### run nxdf-api
`npx nx serve nxdf-api`


## libs

### shared
#### assets
#### config
#### data
#### services
#### utils


### add page
`npx nx g page main --project=artistella`
### add component
`npx nx g component slideImage --project=artistella --directory=pages/main`



### Staking4U

#### If you got this error.
[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null  
run `react-native link @react-native-community/async-storage`