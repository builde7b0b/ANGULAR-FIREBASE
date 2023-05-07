# Angular + FIREBASE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.







## References 

[Hosting Documentation:]
(https://firebase.google.com/docs/hosting/quickstart?hl=en&authuser=3)


## Key Points 

### Project root is the parent of 'src'.
### Entry point for Angular applications is src.main.ts
### This gets executed when the app starts.
### SERVER_URL should be the URL of your API server where your REST APIs are hosted. 


## firebasesrc file 
configuration file for Firebase Hosting. It specifies the project name and targets for hosting.

## Backend Setup
You need to configure and deploy your backend server separately.
Firebase Hosting is intended for hosting static content such as HTML, CSS, and JavaScript files. If you are using Firebase Functions or Firebase Cloud Run to host your backend server, you can configure and deploy it separately and access it using its URL.

Once you have deployed your backend server, you can configure your Angular application to access it by updating the SERVER_URL constant in your `api.service.ts` file to the URL of your backend server.


## Deploying and Hosting - Firebase
To deploy your Angular app and host it on Firebase, you'll need to follow the Firebase hosting documentation to configure your Firebase project and deploy your app.
### Steps:
1. Install the Firebase CLI by running the command `npm install -g firebase-tools`
2. Login to Firebase using the CLI by running the command `firebase login` Initialize your Firebase project by running the command `firebase init` and following the prompts to configure Firebase hosting. 
3. Build your Angular app for production by running the command `ng build --prod`
4. Deploy your app to Firebase by running the command `firebase deploy`

Once your app is deployed to Firebase, it will be hosted at a URL like `https://your-project-name.web.app`.


## Adding Packages / Packages Installation
Make sure to install the required Firebase packages using npm or yarn, and import them in your app.module.ts file as well.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Troubleshooting 

### Endpoint Troubleshooting Steps:
1. Check the URL you are trying to access and ensure that it is correct.

2. Check if the API endpoint you are trying to access exists and is properly configured.
3. Check the response headers of the request and ensure that the Content-Type header is set to application/json.
4. If you are using Firebase, make sure that your Firebase project is properly configured and your API key is correct.

5. If you are using a third-party API, check the API documentation to see if there are any specific requirements or restrictions.

6. If all else fails, you can try using a tool like Postman to manually test the API endpoint and see what response you get.

