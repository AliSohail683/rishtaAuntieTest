import {Platform, StyleSheet, Dimensions} from 'react-native';
import colors from '../../utility/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },

  myPrivacySetting: {
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: colors.primaryBlue,
    marginVertical: '5%',
  },
  privacySettingContainer: {
    width: '95%',
    borderRadius: 10,
    marginHorizontal: '5%',
    alignSelf: 'center',
    paddingVertical: '5%',
    marginBottom: '5%',
    backgroundColor: colors.white,
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.softGrey,
    marginVertical: '5%',
    backgroundColor: colors.softGrey,
  },
  actionItemsView: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    paddingVertical: '5%',
    borderRadius: 10,
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginTop: '2%',
  },
  buttonContainer: {
    width: '70%',
    paddingVertical: '3%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '3%',
    borderRadius: 30,
    borderWidth: 1,
    marginTop: '1%',
    borderColor: colors.primaryPink,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    color: '#D90368',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'red'
  },
  modalView: {
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: '3%',

    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  // container: {
  //   height: windowHeight - 57.5,
  //   width: windowWidth,
  // },
  imgHeader: {
    position: 'absolute',
    padding: '3%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imgFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: '6%',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '12%',
  },
  name: {
    marginLeft: '5%',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Roboto-Medium',
    width: '81%',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '34%',
  },
  lastFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '6%',
  },
  circularImg: {
    position: 'absolute',
    backgroundColor: 'white',
    height: windowHeight * 0.075,
    width: windowHeight * 0.075,
    borderRadius: 50,
    borderWidth: 1.3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrap: {
    alignSelf: 'flex-end',
    height: windowHeight * 0.12,
    width: windowHeight * 0.12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBg: {
    // backgroundColor: '#00000061',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyBox: {
    height: '22%',
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    color: colors.primaryBlue,
    fontFamily: 'Roboto-Medium',
  },
  boxInside: {
    height: '50%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  privacyTxt: {
    color: colors.primaryBlue,
    fontSize: 25,
    fontFamily: 'Roboto-Medium',
    marginVertical: '4%',
  },
  boxFooter: {
    marginTop: '2%',
    width: '100%',
    height: '61%',
    borderRadius: 10,
  },
  alertCrossBtn: {
    height: windowHeight * 0.075,
    width: windowHeight * 0.075,
    borderRadius: 50,
    backgroundColor: colors.white,
    position: 'absolute',
    top: -18,
    right: -10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 0.4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxt: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
  },
  statementTxt: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '3%',
  },
  analystTxt: {color: 'white', fontSize: 15, fontFamily: 'Roboto-Medium'},

  modalContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    width: '100%',
    height: '60%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 33,
    paddingRight: 33,
    overflow: 'hidden',
  },
  cart: {
    height: windowHeight / 4,
    width: '100%',
    borderRadius: 15,
  },
  modalTitle: {
    marginTop: 43,
    marginBottom: 14,
    fontSize: 19,
    lineHeight: 21,
    color: 'black',
    fontFamily: 'GraphikBold',
  },
  modalText: {
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 38,
    color: 'green',
    fontFamily: 'GraphikRegular',
  },
  modalFormText: {
    marginBottom: 10,
    fontSize: 15,
    color: 'purple',
    fontFamily: 'GraphikMedium',
  },
  modalInput: {
    marginBottom: 99,
    height: 44,
    paddingLeft: 17,
    paddingRight: 17,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    fontFamily: 'GraphikRegular',
    borderColor: 'rgba(118, 118, 118, 0.17)',
  },
  openModal: {
    marginRight: 5,
    textAlign: 'right',
    padding: 25,
    color: 'green',
    // fontFamily: 'GraphikMedium',
  },
});
