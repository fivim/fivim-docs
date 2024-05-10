---
title: 常见问题
description: ""
---

## 最佳使用

设置一个强密码。

将加密的文件放在一起，这样您就可以很容易地找到它们。当您想要更改密码时，这一点非常重要。
您可以创建一个目录，使一个文件作为索引文件，创建其他文件使用一些简单的字符作为文件名。例如

```
├── secret_directory
│   ├── 100.md.enc
│   ├── 101.md.enc
│   ├── 102.md.enc
│   ├── 200.md.enc
│   ├── 203.md.enc
│   └── 205.md.enc
```

您可以将**200.md.enc**作为索引文件，编辑指向其他文件的一些链接，如：

```
[ssh-key]（./100.md.enc）
[密码]（./101.md.enc）
[电子邮件]（./102.md.enc）
[银行]（./203.md.enc）
[家族]（./205.md.enc）
```

## markdown 文件的 "可视化模式" 和 "源代码模式" 有什么区别？

**可视化模式** 渲染为 HTML，使用起来很方便。

**源代码模式** 对高级用户很有用。您可以在双栏预览视图中预览代码。

**注意**

如果您的 markdown 文件包含 HTML 代码（不在代码块中），并且您希望保留这些代码，则不得在**可视化模式**中修改内容。

因为**可视化模式**会将标记代码转换为 HTML 代码，这可能会丢失原始标记代码中的 HTML 代码。

## 如何更改密码？

首先，密码有两种用途，一种用于解锁登录屏幕，另一种用于加密文件。

因此，如果您想更改密码，可以按照以下步骤操作：

1. 导出所有加密文件。
2. 删除您的应用程序数据，包括配置文件和用户数据。
3. 重新打开您的应用程序，在**设置向导**页面中设置新密码。
4. 将文件内容复制到新文件中。

## "完全加密文件" 和 "保存时加密" 有什么区别？

### 完全加密的文件

该文件将作为一个整体进行加密，它是一个二进制文件，不能进行版本控制。

### 保存时加密

仅当文件是文本文件时可用，如 **.md** / **.txt**和**源代码文件**。

文件内容是基于 64 个字符串的加密结果，因此可以进行版本控制，就像：

```
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
```

当你打开一个类似 base64 字符串的文件时，你可以尝试解密它。

## 当同步服务不可用时，我无法编辑文件。

是的，因为制作一个完美的同步服务并不容易。因此，如果您设置了同步服务，所有更改将首先发送到远程服务器，在同步服务返回成功后，本地文件将更改。这将确保文件是正确的。

## 我可以使用 git 吗？

是的，如果你想在桌面操作系统上使用 **git**，最好设置同步服务，因为 **从远程初始化** 会删除 **workDir**，这会丢失 **.git** 目录。

对于移动操作系统，您不能使用

## Windows 10/11 缺少表情符号标志支持

- 在 Windows 10/11 上，我们依赖 Edge，目前将标志渲染为字母，而不是标志。

更多https://github.com/nolanlawson/emoji-picker-element/issues/269)
