---
title: How to install MySQL Shell on Your Mac
author: Mila
published_at: 2022/06/30 17:30:30
feature_image: /static/blog/how-to-install-mysql-shell-on-macos/mysql-mac.webp
tags: Education
description: Learn how to install MySQL Shell on your macOS.
---

You can install MySQL Shell on your Mac by using one of these two ways: with the help of Homebrew or to install using the MySQL Shell package.

## Homebrew

To install MySQL Shell using [Homebrew](https://brew.sh/), you need to install Homebrew on your Mac first. If you aren’t sure if you have installed Homebrew already, open your terminal and run the following command to check.

```bash
brew -v
```

If you have, the terminal will display something like this:

![_](/static/blog/how-to-install-mysql-shell-on-macos/brew-version.webp)

Otherwise, run the following command to install Homebrew first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

On successful installation, your terminal will return a few new lines, with one of them stating:

```bash
==>Installation successful!
```

### Installing MySQL Shell

To [install MySQL Shell using Homebrew](https://formulae.brew.sh/cask/mysql-shell), run the following command in the terminal:

```bash
brew install --cask mysql-shell
```

The installation will start shortly. You will know it's successfully installed when your Terminal returns the following lines:

```bash
🍺  mysql-shell was successfully installed!
```

## MySQL Shell package

The second way is to download the [MySQL Shell for the macOS package](https://dev.mysql.com/downloads/shell/).

Select the corresponding Operating System and OS Version of your Mac, and download the package.

![_](/static/blog/how-to-install-mysql-shell-on-macos/mac-version.webp)

Double-click the downloaded DMG file,  a Finder window will show up.

![_](/static/blog/how-to-install-mysql-shell-on-macos/mysql-shell-pkg.webp)

Double-click to extract the .pkg file, and then follow the instructions as shown in the installation wizard. 

![_](/static/blog/how-to-install-mysql-shell-on-macos/mysql-install-wizard.webp)

When the installer finishes, it means you have successfully installed MySQL Shell for Mac, feel free to eject the DMG and delete the file.

## Starting MySQL Shell

Open a new Terminal window and start MySQL Shell using this command:

```bash
mysqlsh
```

This will start MySQL Shell in JavaScript mode (by default). To connect to a server, check out [MySQL Shell Connections](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-connections.html).