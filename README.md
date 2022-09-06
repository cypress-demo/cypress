<p align="center">
      <img alt="Cypress" src="https://www.kindpng.com/picc/m/16-164468_cypress-io-logo-hd-png-download.png" width="300" 
     height="92">
</p>

<h3 align="center">
  Cypress end to end automation framework for web and API testing
</h3>

<p align="center">
    <img src="https://img.shields.io/badge/version-1.0.0-blue"/>
    <img src="https://img.shields.io/badge/size-XMB-blue"/>
</p>

## Contents

- [Introduction](#introduction)
- [Pre-requisites](#pre-requisites)
  - [Skills & References](#skills)
  - [System](#system)
  - [Software](#software)
- [Installation](#installation)
  - [Config Setup](#config)
  - [Clone Project](#clone-project)
  - [Install cypress](#install-cypress)
  - [Trouble-shoot](#trouble-shoot)
- [Test run](#test-run)
- [Test Reporting](#test-reporting)
- [Code Owners](#code-owners)

## Introduction

Cypress consists of a free, open source, locally installed test runner and a dashboard service for recording your tests. Most testing tools operate by running outside the browser and executing remote commands across the network. Cypress works just the opposite way by running in the same loop as your application.
Behind cypress is a node service process, which constantly communicates, synchronizes and performs tasks on behalf of each other. Having access to both parts gives us the ability to respond to applications events in real time, while at the same time work outside the browser for tasks that require a higher privilege. Cypress ultimately controls the entire automation process, which provides us the ability to access everything happening within the browser.

Cypress can be familiar and yet quite different from other automation frameworks. Please read through the following:

1. [How it works](https://www.cypress.io/how-it-works/)
2. [Why Cypress](https://docs.cypress.io/guides/overview/why-cypress)
3. [Key Differences](https://docs.cypress.io/guides/overview/key-differences)

To get accustomed to using cypress, run through the [getting started tutorial](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)

## Pre-requisites

### Skills

- Basic understanding of [JS](https://www.w3schools.com/js/default.asp)/[TS](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) programming concepts(_e.g, variables, functions, classes, iterations, array/lists, dictionaries, etc._)
- [GIT](https://git-scm.com/docs)
- [CSS](https://www.w3schools.com/cssref/css_selectors.asp), [XPATH](https://devhints.io/xpath) selectors and [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) attribute basics
- Cypress concepts - More info below

### System

- **OS Requirements:** ![MacOs](https://img.shields.io/badge/macOs-10.9+-blue) ![Linux](https://img.shields.io/badge/Linux-12.4+-blue) ![Windows](https://img.shields.io/badge/64%20Bit%20Windows-7+-blue)
- **Browsers:** ![chrome](https://img.shields.io/badge/chrome-64+-blue) ![Edge](https://img.shields.io/badge/edge-79+-blue) ![Firefox](https://img.shields.io/badge/firefox-86+-blue)
- **Hardware:**

  - CPU:

    - 2 CPUs to run cypress
    - 1 additional if video recording is turned enabled in cypress config

  - Memory:

    - 4 GB min, 8GB+ for longer test runs

### Software

- [Node.js](https://nodejs.org/en/download/): 12 or 14 and above
- [Cypress](#installation): 9 and above
- [Microsoft Visual Studio Code](https://code.visualstudio.com/): Latest
- [Git](https://git-scm.com/download): Latest
- [Yarn (Optional)](https://classic.yarnpkg.com/en/docs/install): If you are using a package manager

## Installation

### Config

If you are working in a internal network, there are multiple ways to set configurations for NPM. One way to provide is by setting the values in `.npmrc` files

```@company:registry=https://company.internal.repo.url
CYPRESS_DOWNLOAD_MIRROR=https://company.internal.cypress.mirror.url
strict-ssl=false
fund=false
NODE_TLS_REJECT_UNAUTHORIZED=0
```

To know more on editing `.npmrc`, [read this page](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc)

### Clone project

1. [Create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Get the cloning url from GitHub
3. Open terminal and run below command

```bash
$ mkdir workspace
$ cd workspace
$ git clone https://github.com/cypress-demo/cypress.git
```

4. Provide your username and the token generated from Step 2.

If you are not contributing to the repo directly, you can also download the project as ZIP and use it locally.

### Install Cypress

1. Use the project cloned above and in terminal navigate to the project folder.

```bash
$ npm install cypress --save-dev
```

or

```bash
$ yarn add cypress --dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

### Trouble shoot

<details><summary>Command not found</summary>
<p>
Make sure the correct version of node, npm, yarn, cypress is installed

```bash
$ node --version
$ npm --version
$ yarn --version
$ cypress --version
```

</p>
</details>

<details><summary>Issues downloading dependencies</summary>
<p>

- Check for _.npmrc_ configurations. Delete any multiple location overrides
- Delete _node_modules_ / _package-lock.json_ folder and retry installation

</p>
</details>

<details><summary>Issues building the project</summary>
<p>

```bash
$ npm cache clean -f
$ npm i
```

</p>
</details>

<details><summary>Issues with cypress installation</summary>
<p>

```bash
$ npx cypress verify
```

</p>
</details>

<details><summary>Issues with folder permission or write issues</summary>
<p>

- windows: try running command prompt in elevated permission
- linux/mac os: use chmod command in terminal to set 777 user permission for folder/file having permission issue.

</p>
</details>

# Test Run

To run any demo script in this project, run the below command

```bash
$ npx cypress open
```

and select any spec file you want to run from the runner. If you want to trigger the specs directly via command line, try

```bash
$ npx cypress run --spec "*/spefilepath" --headed --browser chrome
```

Refer to [this page](https://docs.cypress.io/guides/guides/command-line#cypress-run) for more command line configs which can be passed

# Test Reporting

If you want to store the results in cypress dashboard, you need to have [projectId and record key setup](https://docs.cypress.io/guides/dashboard/projects#Set-up-a-project-to-record).

Cypress dashboard can be [integrated with Jira workflow](https://docs.cypress.io/guides/dashboard/jira-integration) to create issues or track historical runs

# Code owners

- Prasanna Kurapathi
- Rahul Vishwakarma
- Yogesh Bheemaiah
