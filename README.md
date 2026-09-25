# Brainrot Academy v0.14.1 — Premium Visual Foundation + Android APK Build

Brainrot Academy is an offline-capable Grades 1–6 learning game with Glorp reaction audio and Professor Brainrot review guidance.

## Audio design
- Professor Brainrot: speech bubbles only.
- Spelling: four visible options, exactly one correct spelling, no pronunciation audio.
- Glorp: voiced reaction system remains active.
- Approved Professor Option 1 sample is archived only for potential future use.

## Test
```bash
npm test
```


## v0.11.1
Presentation refresh focused on app icon quality, loading screen polish, home-screen UI, and phone responsiveness.


## v0.11.3
Kid-app presentation polish: stronger Professor-vs-Glorp staging, kid-facing home cards, and additional compact-phone responsiveness.


## Android APK build
GitHub Actions and Codespaces can now build an Android debug APK. See `GITHUB_APK_BUILD.md`.

```bash
npm install
npm run android:build
```

The APK is copied to `artifacts/Brainrot_Academy_v0.14.1-debug.apk`.
