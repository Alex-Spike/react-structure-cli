# [react-structure-cli]

A small cli for react that generates a default module and components structure.
<br>
You can also create your own module structure.
<br>

## Install

Run

>```npm install -g react-structure-cli```

You may need to ```sudo``` it.

## Why?

If you often create default structure for your modules manually then you know that it's tiring all the time to create it. The react-structure-cli is going to help you automate the process.

# Module

## Default module structure

```
default_module
└─ assets
│   └─ Component.scss
└─ components
│   └─ Component.js
└─ containers
│   └─ Container.js
└─ index.js
```

## Module options

Generate module. In case your own module was initialized then the system will use it, otherwise the system will use the default one.

>```rsc module [ModuleName] -g```

Init your own module

>```rsc module [ModuleName] -i```

Reset to default module structure

>```rsc module [ModuleName] -r```

## Generate Module

You need to go to the folder where you want to create a module structure.

Then run:

>```rsc module [ModuleName] -g```

>```rsc module [ModuleName] --generate```

## Init custom module structure

>```rsc module [ModuleName] -i```

>```rsc module [ModuleName] --init```

Firstly you need to create an empty folder and then move your own module structure to it.

You can pass `className` to your .js files. Then when you generate a module the `className` will be replaced automatically with `ModuleName` which you provided.

For example:
```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class classNameComponent extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

classNameComponent.propTypes = {

};

export default classNameComponent;
```

After init your own module structure you can generate a module
>```rsc module TestModule -g```

and the result will be:

```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TestModuleComponent extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

TestModuleComponent.propTypes = {

};

export default TestModuleComponent;
```

## Reset to default module structure

If you initialized custom module and something needs to be changed or a default structure should be used you can reset custom module to a default one:

>```rsc module -r```

>```rsc module --reset```

# Component

## Create normal component

>```rsc component [ComponentName] -n```

>```rsc component [ComponentName] --normal```

## Create pure component

>```rsc component [ComponentName] -p```

>```rsc component [ComponentName] --pure```

## Create stateless component

>```rsc component [ComponentName] -s```

>```rsc component [ComponentName] --stateless```