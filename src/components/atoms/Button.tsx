import React, {useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  mode?: 'outlined' | 'elevated';
}

const Button: React.FC<ButtonProps> = ({
  mode = 'outlined',
  children,
  ...props
}) => {
  const moreStyle = useMemo((): StyleProp<ViewStyle> => {
    if (mode === 'outlined') {
      return {
        borderWidth: 1,
        borderRadius: 6,
      };
    }
  }, [mode]);

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, moreStyle, props.style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
