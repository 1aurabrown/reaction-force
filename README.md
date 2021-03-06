```
      :::::::::  ::::::::::     :::      :::::::: ::::::::::: ::::::::::: ::::::::  ::::    :::
     :+:    :+: :+:          :+: :+:   :+:    :+:    :+:         :+:    :+:    :+: :+:+:   :+:
    +:+    +:+ +:+         +:+   +:+  +:+           +:+         +:+    +:+    +:+ :+:+:+  +:+
   +#++:++#:  +#++:++#   +#++:++#++: +#+           +#+         +#+    +#+    +:+ +#+ +:+ +#+
  +#+    +#+ +#+        +#+     +#+ +#+           +#+         +#+    +#+    +#+ +#+  +#+#+#
 #+#    #+# #+#        #+#     #+# #+#    #+#    #+#         #+#    #+#    #+# #+#   #+#+#
###    ### ########## ###     ###  ########     ###     ########### ########  ###    ####
      :::::::::: ::::::::  :::::::::   ::::::::  ::::::::::
     :+:       :+:    :+: :+:    :+: :+:    :+: :+:
    +:+       +:+    +:+ +:+    +:+ +:+        +:+
   :#::+::#  +#+    +:+ +#++:++#:  +#+        +#++:++#
  +#+       +#+    +#+ +#+    +#+ +#+        +#+
 #+#       #+#    #+# #+#    #+# #+#    #+# #+#
###        ########  ###    ###  ########  ##########
```

## Meta

* __State:__ development
* __Demo:__ https://artsy.github.io/reaction-force
* __CI:__ [![CircleCI](https://circleci.com/gh/artsy/reaction-force.svg?style=shield)](https://circleci.com/gh/artsy/reaction-force)
* __Point People:__ [@alloy](https://github.com/alloy) & [@broskoski](https://github.com/broskoski)

## Installation

```
$ git clone --recursive https://github.com/artsy/reaction-force.git
$ cd reaction-force
$ npm install -g yarn
$ yarn install
```

## Instructions

* Development of components happen in [storybooks](https://getstorybook.io):

        $ yarn storybook
        $ open http://localhost:9001/

* Run the tests:

        $ yarn test

* Run the tests continuously (or use `vscode-jest`):

        $ yarn test -- --watch

* After updating components, be sure to deploy a new demo (sharing is caring!):

        $ yarn deploy-storybook

* After updating a Relay query fragment, be sure to update the typings for it:

        $ yarn relay2ts

* When using new changes in metaphysics’ schema, be sure to update the local schema copy:

        $ yarn sync-schema

* There are some suggested VSCode extensions in `.vscode/extensions.json`.

## TODO

* [ ] Actually make useful components.
* [ ] Publish as npm package.
* [ ] Integrate into Force.
