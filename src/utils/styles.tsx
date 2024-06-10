import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
// import { COLORS, screenHeight } from "./constants";

export const commonStyles = StyleSheet.create({
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexrowcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardWithShadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 4,
    elevation: 4,
  },
  flexJustRowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // PAID & UNPAID DOT
  dotView: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  // COMMON INPUTTEXT & INPUTVIEW STYLES
  inputView: {
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 40,
    // padding: screenHeight(0.9),
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconView: {
    marginRight: 10,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  // NOTIFICATON POP CARD
  popupCard: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 999,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: COLORS.SECONDARY,
  },
  chatBtn: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    marginVertical: 10,
  },
  unreadBadge: {
    backgroundColor: COLORS.RED,
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -5,
    right: -5,
  },
  rowSpaceBtween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
