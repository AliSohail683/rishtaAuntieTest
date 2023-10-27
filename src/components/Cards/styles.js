import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utility/size';
import colors from '../../utility/colors';

export default StyleSheet.create({
  // BEFORE FLIP
  shadowContainer: {
    width: windowWidth * 0.46,
    height: windowHeight * 0.34,
    borderRadius: 36,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  indicator: {
    flex: 1,
    position: 'absolute',
    top: '50%',
    left: '45%',
    zIndex: 1,
  },
  imgBg: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    backgroundColor: colors.black,
    borderRadius: 36,
    opacity: 0.4,
  },
  infoContainer: {
    justifyContent: 'flex-end',
    marginBottom: '5%',
    paddingBottom: '5%',
    zIndex: 0,
    paddingHorizontal: '7%',
    height: '100%',
  },
  nameAgeTxt: {
    fontSize: 22,
    color: colors.white,
    fontFamily: 'Inter-Medium',
  },
  locationTxt: {
    fontSize: 12,
    color: colors.white,
    marginVertical: '2%',
    fontFamily: 'Inter-Regular',
  },
  daysTxt: {
    fontSize: 12,
    color: colors.white,
    fontFamily: 'Inter-Regular',
  },
  flagsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
    bottom: 5,
    width: '40%',
  },
  diagonalContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 80,
    borderRightWidth: 0,
    borderBottomWidth: 80,
    borderBottomRightRadius: 36,
    borderStyle: 'solid',
    zIndex: 0,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.primaryPink,
  },
  diagonalInnerContainer: {
    position: 'absolute',
    right: 1,
    top: 40,
  },
  viewTxt: {
    fontSize: 15,
    position: 'absolute',
    right: 1,
    color: colors.white,
    fontFamily: 'Inter-Medium',
    transform: [{rotate: '-45deg'}],
  },
  viewArrow: {
    position: 'absolute',
    right: 10,
    top: 12,
    width: 15,
    height: 15,
  },

  // AFTER FLIP
  shadowContainer1: {
    width: windowWidth * 0.46,
    height: windowHeight * 0.34,
    paddingVertical: '5%',
    backgroundColor: colors.white,
    borderRadius: 36,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  commentContainer: {
    width: '100%',
    marginBottom: '5%',
  },
  daysAgoTxt: {
    color: colors.daysAgoGrey,
    fontSize: 12,
    paddingHorizontal: '10%',
    marginTop: '0.5%',
    alignSelf: 'flex-start',
    fontFamily: 'Inter-Regular',
  },
  topUserView: {
    alignItems: 'center',
    paddingVertical: '2%',
  },
  topRowView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: 20,
    color: colors.blackBlue,
    fontFamily: 'Inter-Medium',
    minWidth: '10%',
    maxWidth: '80%',
    textAlign: 'right',
  },
  ageTxt: {
    fontSize: 20,
    color: colors.blackBlue,
    fontFamily: 'Inter-Medium',
  },
  likeCommentText: {
    color: colors.blackBlue,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    alignSelf: 'center',
    textAlign: 'center',
    width: '90%',
  },
  waveContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
  playBtnContainer: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignSelf: 'center',
    backgroundColor: colors.primaryPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {width: 18, height: 18},
  wave: {
    width: '70%',
    height: 30,
    marginLeft: 5,
    alignSelf: 'center',
  },
  divider: {
    width: '70%',
    marginVertical: '1%',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: colors.softGrey,
  },
  promptContainer: {
    width: '100%',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    marginVertical: '1%',
  },
  questTxt: {
    marginVertical: '1%',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: colors.blackBlue,
    textAlign: 'left',
  },
  ansTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginVertical: '1%',
    color: colors.primaryPink,
    textAlign: 'right',
  },
  profilePic: {
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    marginVertical: '3%',
  },
  btnViewContainer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    bottom:30,
    // width: '100%', 
    // zIndex:1,
  },
  btnView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  btnView1: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: colors.primaryPink,
  },
  diagonalXContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 70,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderBottomRightRadius: 36,
    borderStyle: 'solid',
    zIndex: 0,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.primaryPink,
  },
  diagonalXInnerContainer: {
    position: 'absolute',
    right: 1,
    top: 30,
  },
  xImg: {
    position: 'absolute',
    right: 20,
    top: 6,
    width: 12,
    height: 12,
  },
});
