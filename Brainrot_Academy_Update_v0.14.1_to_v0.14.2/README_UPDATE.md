# Brainrot Academy v0.14.1 → v0.14.2

Fixes the GitHub-only APK test failure caused by `android/` in `.gitignore` unintentionally excluding `resources/android/` launcher icons.

From the repository root:

```bash
bash Brainrot_Academy_Update_v0.14.1_to_v0.14.2/apply-update.sh
git add -A
git commit -m "Brainrot Academy v0.14.2 GitHub APK fix"
git push
```
