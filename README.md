# The simplest network load indicator of react-native


If you want to learn React-Native cross platform project，Check out [ComicBook](https://github.com/liyuechun/ComicBook).


## Design sketch
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/hud.gif)
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/001.png)
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/002.png)
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/003.png)
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/004.png)
![progress-hud-screen](http://ooljpjhzm.bkt.clouddn.com/005.png)

## Install

```shell
npm install --save react-native-simplest-hud
```

## Usage

```js
import { RNProgressHUD,mixin } from 'react-native-simplest-hud';

import jsonData from './data.json';

class ExamplePage extends  mixin(RNProgressHUD.Mixin){
<!--mixin(RNProgressHUD.Mixin) replace Component-->
    ...
    render(){
        return(
            <View style={{flex: 1,backgroundColor: 'white'}}>
                ...
                <RNProgressHUD
                    isVisible={this.state.is_hud_visible} //Fixed writing
                    color='rgb(69,149,252)' //hud color
                    label="Loading..."  //"" or "Prompt string"
                    isActivityIndicator={true} //true or false
                />
                ...
            </View>
        );
    }
}
```

### Showing the HUD
You can display the HUD by calling:

```js
  this.showHUD();
```

### Dismissing the HUD
It can be hide by calling:

```js
  this.hideHUD();
```

## Props
The following props can be used to modify the HUD's style and/or behaviour:

| Prop | Type | Opt/Required | Default | Note |
|---|---|---|---|---|
|__`isVisible`__|_Boolean_|Required|`N/A`|Displays the HUD when set to true.
|__`isActivityIndicator`__|_Boolean_|Optional|`false`|When set to true, the HUD is show by the ActivityIndicator style,or showing by the Rotating ring style.
|__`label`__|_String_|Optional|`Loading...`|Sets Prompt string of the HUD.
|__`color`__|_String_|Optional|`rgb(69,149,252)`|Sets the color of the HUD spinner.




