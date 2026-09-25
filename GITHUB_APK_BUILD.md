# Brainrot Academy Android APK build

Brainrot Academy v0.13.0 is configured to build an Android **debug APK** in GitHub Actions.

## Automatic GitHub build

The workflow lives at:

`.github/workflows/build-android-apk.yml`

It runs when code is pushed to `main`, and it can also be started manually from the **Actions** tab with **Run workflow**.

The workflow:
1. Installs Node dependencies.
2. Runs the test suite.
3. Creates a fresh Capacitor Android project.
4. Syncs the Brainrot Academy web app into Android.
5. Applies the Brainrot Academy app icon and Android version metadata.
6. Runs Gradle `assembleDebug`.
7. Uploads the finished APK as a GitHub Actions artifact named `Brainrot-Academy-v0.13.0-APK`.

## Downloading the APK from GitHub

Open the repository's **Actions** tab, open the newest successful **Build Android APK** run, and download the `Brainrot-Academy-v0.13.0-APK` artifact.

The artifact contains:

- `Brainrot_Academy_v0.13.0-debug.apk`
- `Brainrot_Academy_v0.13.0-debug.sha256.txt`

## Codespaces build without Ports

From the repository root:

```bash
npm install
npm test
npm run android:build
```

The APK will be written to:

`artifacts/Brainrot_Academy_v0.13.0-debug.apk`

No web server or Codespaces port is required for an APK build.

## Release signing

This workflow intentionally builds a debug APK for private testing. A Play Store release later should use a private signing keystore stored in GitHub Actions secrets and produce a signed release AAB/APK.
