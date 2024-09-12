# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install modules

```bash
# using npm
npm install
```

To run project on iOS, you have to install pods

```bash
# using Cocoapods
npx pod-install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 3: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

Sometime ios can't select device to run, we can use these commands:

```bash
xcrun simctl list devices
npm run ios -- --udid="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
