import React from 'react';
// NPM Module
import LinearGradient from 'react-native-linear-gradient';

const GradientCard = (props) => {
  return (
    <LinearGradient
      colors={props.colors}
      style={{
        borderRadius: 15,
        padding: 20,
        height: props.height,
      }}
      useAngle={true}
      angle={120}>
      {props.children}
    </LinearGradient>
  );
};

export default GradientCard;
