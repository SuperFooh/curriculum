# Deploying create-react-app production bundle with GH-pages  

Lorem ipsum dolor sit amet consectetur adipiscing elit ante, condimentum mus libero habitant eu mollis. Elementum hac orci varius conubia tempor phasellus integer aliquam purus, aenean luctus sociosqu nunc natoque ante rutrum. Quam scelerisque pulvinar diam leo mi malesuada lectus commodo rutrum, eu etiam ad lacus nullam arcu orci.

## Create a CRA proyect

```bash
$ npx create-react-app my-proyect
$ cd my-proyect
```


## Git configs

Set user and email local configurations

```bash 
$ git config --local user.name "user name"
$ git config --local user.email "user@email.com"
```
When using multiple accounts of git, remember to clear credentials.
First of all, we'll check if we have a credential manager working.

```bash
$ git credential-manager version
```

### For clearing them in windows:

* Open credential manager
* Clear github saved credentials

### fixing author of commit

```bash
$ git commit --amend --author="<userName> <userEmail>" --no-edit
```

Setting our remote repositories

```bash
$ git add remote origin <remoteRepoURL>
```

## GH-pages dependency

Install (GH-pages)[https://www.npmjs.com/package/gh-pages] as a global dependency in your working station.

```bash
$ npm i gh-pages
```

## Update package.json

We'll be adding a **homepage** key to our package.json file.
We have to add our gh-pages URL pairing to that homepage key.

> homepage = `https://${githubUserName}.github.io/${repositoryName} 

```json
{
  "homepage": "https://<userName>.github.io/<repositoryName>",
}

In addition, we'll be adding this two scripts for automating our deploy in just one click

```json
{
  "scripts": {
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
}

```

### deploy script

Here we are running gh-pages CLI command to publish our distribution to be served by github.
With the **-d** flag we are indicating to use the **/build** folder as the point of entrance of our gh-pages-served Application.
If you are familiar with [CRA](https://en.reactjs.org/docs/create-a-new-react-app.html), you'll notice that is the famouse production bundle that webpack spits out when running

```bash
$ npm run build
```

### predeploy script

That is why we added our **predeploy** key earlier.
This will run immediately before than [deploy](###deploy-script).


## Workflow

1. manage changes in master branch
1. add and commit changes
1. execute

```bash 
$ npm run deploy
```

By now, gh-pages package must have created a gh-pages branch and feeded it with our production build.

1. Navigate to our package.json [homepage-key](##update-package.json) value
1. You should visualize your div (#root) displayed on the viewport 😎👍




