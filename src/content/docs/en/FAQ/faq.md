---
title: FAQ
description: ""
---

## Best usage

Set a strong password.

Keep your encrypted files together, so you can easily find them. This is very important when you want to change the password.
You can create a directiry, make a file as the index file, create other files use some simple chars as the filename. For example:

```
├── secret_directory
│   ├── 100.md.enc
│   ├── 101.md.enc
│   ├── 102.md.enc
│   ├── 200.md.enc
│   ├── 203.md.enc
│   └── 205.md.enc
```

You can make **200.md.enc** as the index file, edit some links to other files, like:

```
[ssh key](./100.md.enc)
[password](./101.md.enc)
[emails](./102.md.enc)
[bank](./203.md.enc)
[family](./205.md.enc)
```

## What the differents between "Visualization mode" and "Source code mode" of markdown file?

**Visualization mode** is rendered as HTML, it's easy to use.

**Source code mode** is useful for advanced users. You can preview the code in a dual column preview view.

**Attention**

If your markdown file has HTML code(not in code block), and you'd like to keep them, you must not modify the content in **Visualization mode**.

Because **Visualization mode** will convert the markdown code to HTML code, this may lost the HTML code in your original makrdown code.

## How to change password?

At first, the password has two usages, one is used to unlock the login screen, another one is used to encrypt the file.

So, if you want to change your password, you can follow the steps:

1. Export all of your encypted files.
2. Delete your app data, both configure files and user data.
3. Reopen your app, set a new password in the **setup wizard** page.
4. Copy your file contents into the new files.

## What the differents between "Fully encrypetd file" and "Encrypt on save"?

### Fully encrypetd file

The file will be encrypted as a whole, it's a binary file, and cannot be version controlled.

### Encrypt on save

Only available while the file is a text file, such as **.md** / **.txt** and **source code file**.

The file content is the result of encryption which are base64 strings, so it can be version controlled, it's like:

```
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
```

When you open a file like base64 strings, you can try to decrypt it.

## I can't edit file when sync service is not available.

Yes, because to make a perfect sync service is not easy. so if you have set a sync service, all the changes will be sent to the remote server first, and the local file changes after the sync service returns success. This will ensure the files are correct.

## Can I work with git?

Yes, if you want to use **git** on desktop OS, it's better to usset the sync service, because **Initialize from remote end** will remove the **workDir**, this will lost **.git** directory.

For mobile OS, you cannot use **git**, set a sync service is necessary.

## Translation error found

- Due to the use of automatic translation, there may be some problems, please feedback to us.

## Windows 10/11 missing emoji flag support

- On Windows 10/11, we rely on Edge, currently render flags as letters, not flags.

- [more](https://github.com/nolanlawson/emoji-picker-element/issues/269)
