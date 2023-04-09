# Beating Heart Icon

A customizable React component that displays a beating heart icon. The component allows you to change the size, color, fill style, and animation speed.

## Installation

npm\
```npm install beating-heart-icon```\
or using yarn\
```yarn add beating-heart-icon```

## Usage

```tsx
import React from 'react';
import BeatingHeartIcon from 'beating-heart-icon';

const App: React.FC = () => {
  return (
    <div>
      <BeatingHeartIcon size={50} color="red" filled animationSpeed={500} />
      <BeatingHeartIcon size={75} color="blue" animationSpeed={1000} />
      <BeatingHeartIcon size={100} color="green" filled animationSpeed={1500} />
    </div>
  );
};

export default App;
```

## Props

| Prop           | Type    | Default | Description                                                  |
| -------------- | ------- | ------- | ------------------------------------------------------------ |
| size           | number  | 50      | The width and height of the icon in pixels.                  |
| color          | string  | 'red'   | The color of the heart icon.                                 |
| filled         | boolean | false   | Whether the heart icon should be filled or outlined.         |
| animationSpeed | number  | 500     | The speed of the beating animation in milliseconds (between 150 and 1000). |


## License

MIT