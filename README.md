
# The Primo New UI Customization Workflow Development Environment



Must be packed for deploy with a command such as: zip -r 01UODE_MAIN.zip 01UODE_MAIN -x "*.DS_Store"

File Structure MUST be under root named: 01UODE_MAIN



##Package documentation

The development package allows you to configure :

- css

- images

- html

- JavaScript

- The root directory of the package should be named either by the `viewCode` or `CENTRAL_PACKAGE` in case of a consortia level package
- Whether you develop a consortia level package or a view level package the process remains the same
- Once deployed the hierarchy is as follows:
    1. For css - use the cascading ability of css and load the consortia level (CENTRAL_PACKAGE) css first and the view level css afterwards
    2. For images and html - the system checks for every file if it exists in each level - and prefers the view level file if exists
    3. For JavaScript - the two package types define 2 different Angular modules:
        - ```var app = angular.module('viewCustom', ['angularLoad']);```
        - ```var app = angular.module('centralCustom', ['angularLoad']);```

  and loads both of the modules,

- For each configuration type there is a specified folder in the custom package folder (that can be downloaded form your Primo Back Office)
- In each folder you will find a specific README.md file with recipes/examples.

  [CSS](./VIEW_CODE/css/README.md "css documentation")

  [HTML](./VIEW_CODE/html/README.md "html documentation")

  [Images](./VIEW_CODE/img/README.md "images documentation")

  [JavaScript](./VIEW_CODE/js/README.md "javascript documentation")



## Modifying the Primo view files

To modify Primo view files:

1. Download the view package from Primo Back Office (Deploy Utilities -> UI Customization Package Manager)

2. Unzip and move the downloaded view folder to the Primo dev environment, into the folder "primo-explore-devenv/primo-explore/custom/"

3. Navigate to the Primo dev environment (primo-explore-devenv) folder. Start the local dev server with the command "gulp run --[view]" (example: gulp run --01UODE_MAIN) *Linux - use sudo 

4. In the /js folder, do not edit custom.js directly. This file is created dynamically, and is an aggregate of the other files in the /js folder. When the primo-explore-devenv server is running, each time a file is saved, the custom.js file will be rebuilt using the updated code from the other files. The main DU customizations are in "primo-du.js"

5. Once the updates are complete and everything appears correct in the primo-explore-devenv browser (localhost:8003/primo-explore/?vid=[view]), build the view package using the command "gulp create-package" *Linux - use sudo

6. The built package (.zip file) will be located in the folder "primo-explore-devenv/packages/".  Upload this package to Primo Sandbox Back Office (Deploy Utilities -> UI Customization Package Manager) and deploy it

edit
7. Upload to production after sandbox works, confirm with stakeholders to go live

Additional notes.

1-NYU libray code
2- custom joseph
primo-du.js - DU specific customizations
in the future, add customizations to primo-du, separate when: code is really big, or not our code

upload zip to sandbox and test




