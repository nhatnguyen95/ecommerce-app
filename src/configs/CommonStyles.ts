import {StyleSheet} from 'react-native';

const CommonStyles = {
  flexCol: StyleSheet.create({
    default: {
      flexDirection: 'column',
    },
    alignCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    alignEnd: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    alignBetween: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    justifyCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    center: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyBetween: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    justifyBetweenCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    justifyEndCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  }),
  flexRow: StyleSheet.create({
    default: {
      flexDirection: 'row',
    },
    alignStart: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    alignCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    justifyCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    justifyEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    justifyEndCenter: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    center: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyBetweenCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    justifyBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    justifyAroundCenter: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    wrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  }),
  text: StyleSheet.create({
    text22Bold: {
      fontWeight: '700',
      fontSize: 22,
      lineHeight: 28,
    },
    text22Semibold: {
      fontWeight: '600',
      fontSize: 22,
      lineHeight: 30,
    },
    text16Semibold: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 22,
    },
    text14Semibold: {
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
    },
    text18Semibold: {
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 26,
    },
    text18Bold: {
      fontWeight: '700',
      fontSize: 18,
      lineHeight: 27,
    },
    text18: {
      fontWeight: '400',
      fontSize: 18,
      lineHeight: 27,
    },
    text16: {
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 22,
    },
    text16Bold: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 22,
    },
    text14: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 18,
    },
    text12: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16,
    },
    text12Medium: {
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 16,
    },
    text14Medium: {
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 18,
    },
    text16Medium: {
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 22,
    },
    text48Medium: {
      fontWeight: '500',
      fontSize: 48,
      lineHeight: 66,
    },
    text14Bold: {
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 18,
    },
    text12Semibold: {
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 18,
    },
  }),
};

export default CommonStyles;
