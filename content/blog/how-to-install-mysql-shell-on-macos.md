---
title: How to install MySQL Shell on Your Mac
author: Mila
published_at: 2022/06/30 17:30:30
feature_image: /static/blog/how-to-install-mysql-shell-on-macos/mysql-mac.webp
tags: Education
description: Learn how to install MySQL Shell on your macOS.
---

[MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/) is an interactive JavaScript, Python, or SQL interface for MySQL Server and is a component that you can install separately. It can be installed on your Mac by using Homebrew or the official MySQL Shell package.

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

```plain
==>Installation successful!
```

### Install MySQL Shell

To [install MySQL Shell using Homebrew](https://formulae.brew.sh/cask/mysql-shell), run the following command in the terminal:

```bash
brew install --cask mysql-shell
```

The installation will start shortly. You will know it's done when your Terminal returns the following lines:

```plain
🍺  mysql-shell was successfully installed!
```

Start MySQL Shell to verify the installation.

```bash
mysqlsh
```

This output indicates that the installation was successful.

```plain
MySQL Shell version

Copyright (c) 2016, 2022, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
 MySQL  JS >
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

Start MySQL Shell to verify the installation.

```bash
mysqlsh
```

This output indicates that the installation was successful.

```plain
MySQL Shell version

Copyright (c) 2016, 2022, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
 MySQL  JS >
```

## Starting MySQL Shell

You can start MySQL Shell using this command:

```bash
mysqlsh
```

This will start MySQL Shell in JavaScript mode (by default). To connect to a server, check out [MySQL Shell Connections](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-connections.html).
