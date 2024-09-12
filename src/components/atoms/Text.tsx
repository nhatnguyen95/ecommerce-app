import React, {useMemo} from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'bodyMedium' | 'titleMedium';
}

const Text: React.FC<TextProps> = ({
  variant = 'bodyMedium',
  children,
  ...props
}) => {
  const moreStyle = useMemo((): StyleProp<TextStyle> => {
    let fontSize = 14;
    if (variant === 'bodyMedium') {
      fontSize = 14;
    }
    if (variant === 'titleMedium') {
      fontSize = 20;
    }
    return {
      fontSize,
    };
  }, [variant]);

  return (
    <RNText {...props} style={[moreStyle, props.style]}>
      {children}
    </RNText>
  );
};

export default Text;
