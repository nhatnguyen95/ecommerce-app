import React, {useMemo} from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

interface CardProps extends ViewProps {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
}

const Card: React.FC<CardProps> = ({elevation = 1, children, ...props}) => {
  const elevationStyle = useMemo(() => {
    return styles[`elevation${elevation}`];
  }, [elevation]);

  return (
    <View {...props} style={[styles.container, elevationStyle, props.style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  elevation0: {},
  elevation1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  elevation2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  elevation3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  elevation4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  elevation5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Card;
