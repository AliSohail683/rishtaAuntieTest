import { Platform, StyleSheet, Dimensions } from "react-native";
import colors from "../../utility/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyWhite,
  },
  imageContainer: {
    height: "100%",
    width: windowWidth,
  },
  imgHeader: {
    position: "absolute",
    padding: "2%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 3,
  },
  name: {
    fontSize: 24,
    color: "white",
    fontFamily: "Inter-SemiBold",
    marginBottom: -3,
  },
  flagContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: 40,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.55,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgFooter: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: "3%",
  },
  imgRight: {
    justifyContent: "space-between",
    height: windowHeight * 0.24,
    paddingVertical: "4%",
  },
  actionIcon: {
    height: windowHeight * 0.057,
    width: windowHeight * 0.057,
    borderRadius: 50,
    backgroundColor: colors.primaryPink,
    alignItems: "center",
    justifyContent: "center",
  },
  analystSection: {
    width: windowWidth * 0.92,
    marginVertical: "4%",
    alignSelf: "center",
    borderRadius: 18,
    backgroundColor: colors.white,
    paddingVertical: "4%",
    paddingHorizontal: "4%",
    justifyContent: "center",
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.4,
    elevation: 5,
  },
  analystTxt: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "50%",
    maxWidth: " 100%",
  },
  matchingSection: {
    paddingVertical: "4%",
    paddingHorizontal: "4%",
    width: windowWidth * 0.92,
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: "4%",
    padding: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0.4,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  imgView: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    marginBottom: "10%",
  },
  myVibesSection: {
    marginVertical: "5%",
    width: windowWidth * 0.92,
    alignSelf: "center",
    paddingBottom: "7%",
    backgroundColor: "transparent",
  },
  myvibes: {
    color: colors.blackBlue,
    fontFamily: "Inter-Medium",
    fontSize: windowHeight * 0.025,
  },
  whiteTitle: {
    color: colors.white,
  },
  ambBtn: {
    backgroundColor: colors.primaryBlue,
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "2%",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: "1%",
  },
  cardSection: {
    width: windowWidth * 0.92,
    height: windowHeight * 0.59,
    alignSelf: "center",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 7,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  lookingForSec: {
    // height: windowHeight * 0.21,
    width: windowWidth * 0.92,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: "4%",
    paddingHorizontal: "4%",
    justifyContent: "center",
    paddingVertical: "4%",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: '2%',
    width: "50%",
    alignSelf: "flex-end",
  },
  imgSection: {
    height: windowHeight * 0.6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 20,
    backgroundColor: "black",
  },
  paginatorSection: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
  },
  statementTxt: {
    color: colors.blackBlue,
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
  analystFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationTxt: {
    fontSize: 16,
    color: colors.blackBlue,
    fontFamily: "Inter-Regular",
  },
  location: {
    marginLeft: "2%",
    fontSize: 16,
    color: "white",
    fontFamily: "Inter-Medium",
  },
  matchingSecHeader: {
    flexDirection: "row",
    width: "49%",
    justifyContent: "space-between",
    marginVertical: "2%",
  },
  imgCircle: { height: "100%", width: "100%", borderRadius: 50 },
  nameTxt: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter-Medium",
    marginBottom: 5,
  },
  ambitiousBttn: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "Inter-Medium",
  },
  cardPaginatorView: {
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
    paddingHorizontal: "5%",
  },
  lookingForTxt: {
    color: colors.blackBlue,
    fontFamily: "Inter-Medium",
    fontSize: windowHeight * 0.025,
    alignSelf: "flex-start",
  },
  poolQuestTxt: {
    color: colors.blackBlue,
    fontFamily: "Inter-Regular",
    fontSize: windowHeight * 0.019,
    alignSelf: "flex-start",
  },
  poolAnsTxt: {
    color: colors.blackBlue,
    fontFamily: "Inter-SemiBold",
    fontSize: 24,
    marginVertical: "5%",
    alignSelf: "flex-end",
    marginRight: "5%",
  },
  perfectLatteTxt: {
    color: colors.primaryPink,
    fontFamily: "Inter-Medium",
    fontSize: 24,
    marginVertical: "5%",
    alignSelf: "flex-end",
    marginRight: "5%",
  },
  actionbtnShadow: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  bulbSect: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    alignItems: "center",
    marginTop: "1%",
  },
  meView: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  bulbView: {
    height: "100%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  meTxt: {
    marginBottom: 2,
    color: "#A7A8A8",
    fontFamily: "Inter-Medium",
  },
  capsule: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.blackBlue,
  },
  filled: {
    backgroundColor: colors.primaryPink,
  },
  lookingForFooter: {
    backgroundColor: colors.primaryBlue,
    marginTop: "2%",
    height: "34%",
    width: "95%",
    borderRadius: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: "5%",
    lineHeight: 15,
  },
  matchingDesc: {
    color: "white",
    fontSize: 10,
    fontFamily: "Inter-Medium",
    lineHeight: 15,
  },
  nameView: {
    position: "absolute",
    zIndex: 1,
    bottom: 60,
    left: 20,
    width: "60%",
  },
  iconImg: {
    height: windowHeight * 0.055,
    width: windowHeight * 0.055,
    alignItems: "center",
    justifyContent: "center",
  },
});
// import {Platform, StyleSheet, Dimensions} from 'react-native';
// import colors from '../../utility/colors';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.greyWhite,
//   },
//   imageContainer: {
//     height: '100%',
//     width: windowWidth,
//   },
//   imgHeader: {
//     position: 'absolute',
//     padding: '2%',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   name: {
//     fontSize: 24,
//     color: 'white',
//     fontFamily: 'Inter-Regular',
//     marginBottom: '6%',
//     textAlign: 'center',
//   },
//   flagContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '17%',
//     height: '34%',
//   },
//   imgFooter: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     width: '100%',
//     paddingHorizontal: '3%',
//   },
//   imgRight: {
//     justifyContent: 'space-between',
//     height: windowHeight * 0.24,
//     paddingVertical: '4%',
//   },
//   actionIcon: {
//     height: windowHeight * 0.057,
//     width: windowHeight * 0.057,
//     borderRadius: 50,
//     backgroundColor: colors.primaryPink,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   analystSection: {
//     height: windowHeight * 0.13,
//     width: windowWidth * 0.92,
//     marginVertical: '4%',
//     alignSelf: 'center',
//     borderRadius: 30,
//     backgroundColor: colors.white,
//     paddingVertical: '4%',
//     paddingHorizontal: '11%',
//     justifyContent: 'center',
//     shadowColor: '#CCCCCC',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 0.4,
//     elevation: 5,
//   },
//   analystTxt: {
//     flexDirection: 'row',
//     marginTop: '5%',
//     alignSelf: 'flex-end',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '88%',
//   },
//   matchingSection: {
//     height: windowHeight * 0.21,
//     width: windowWidth * 0.92,
//     alignItems: 'center',
//     backgroundColor: colors.white,
//     marginVertical: '4%',
//     alignSelf: 'center',
//     paddingVertical: '1%',
//     alignItems: 'center',
//     borderRadius: 10,
//     shadowColor: 'grey',
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     shadowRadius: 0.4,
//     shadowOpacity: 0.1,
//     elevation: 5,
//   },
//   imgView: {
//     height: windowHeight * 0.07,
//     width: windowHeight * 0.07,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 3,
//     marginBottom: '10%',
//   },
//   myVibesSection: {
//     marginVertical: '5%',
//     width: windowWidth * 0.92,
//     alignSelf: 'center',
//     paddingBottom: '7%',
//     backgroundColor: 'transparent',
//   },
//   myvibes: {
//     color: colors.primaryPink,
//     fontFamily: 'Inter-Medium',
//     fontSize: 24,
//   },
//   ambBtn: {
//     backgroundColor: colors.primaryBlue,
//     width: windowWidth * 0.29,
//     height: windowHeight * 0.047,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: '3%',
//     shadowColor: 'black',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 5,
//     marginLeft: '3%',
//   },
//   cardSection: {
//     width: windowWidth * 0.92,
//     height: windowHeight * 0.59,
//     alignSelf: 'center',
//     shadowColor: 'grey',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 7,
//     backgroundColor: colors.white,
//     borderRadius: 10,
//   },
//   lookingForSec: {
//     height: windowHeight * 0.22,
//     width: windowWidth * 0.92,
//     backgroundColor: colors.white,
//     alignSelf: 'center',
//     borderRadius: 10,
//     marginVertical: '6%',
//     padding: '5%',
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: '2%',
//     width: '51%',
//     alignSelf: 'flex-end',
//   },
//   imgSection: {
//     height: windowHeight * 0.78,
//     shadowColor: 'black',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 20,
//     backgroundColor: 'black',
//   },
//   paginatorSection: {
//     position: 'absolute',
//     bottom: 0,
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
//   statementTxt: {
//     color: colors.primaryBlue,
//     fontSize: 16,
//     fontFamily: 'Inter-Regular',
//   },
//   analystFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   locationTxt: {
//     fontSize: 16,
//     color: colors.primaryBlue,
//     fontFamily: 'Inter-Regular',
//   },
//   matchingSecHeader: {
//     flexDirection: 'row',
//     width: '49%',
//     justifyContent: 'space-between',
//     marginVertical: '2%',
//   },
//   imgCircle: {height: '100%', width: '100%', borderRadius: 50},
//   nameTxt: {
//     fontSize: 18,
//     fontFamily: 'Inter-Regular',
//   },
//   ambitiousBttn: {
//     color: colors.white,
//     fontSize: 15,
//     fontFamily: 'Inter-Medium',
//   },
//   cardPaginatorView: {
//     position: 'absolute',
//     bottom: 5,
//     alignSelf: 'center',
//     paddingHorizontal: '5%',
//   },
//   lookingForTxt: {
//     color: colors.primaryBlue,
//     fontFamily: 'Inter-Medium',
//     fontSize: 20,
//   },
//   perfectLatteTxt: {
//     color: colors.primaryPink,
//     fontFamily: 'Inter-Medium',
//     fontSize: 24,
//     marginVertical: '5%',
//     alignSelf: 'flex-end',
//     marginRight: '5%',
//   },
//   actionbtnShadow: {
//     shadowColor: 'black',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   bulbSect: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '70%',
//     height: '38%',
//     alignItems: 'center',
//     marginVertical: '1%',
//     // backgroundColor: 'red',
//   },
//   meView: {
//     height: '86%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   bulbView: {
//     height: '100%',
//     width: '25%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   meTxt: {
//     color: '#A7A8A8',
//     fontFamily: 'Inter-Medium',
//   },
//   lookingForFooter: {
//     backgroundColor: colors.primaryBlue,
//     marginTop: '2%',
//     height: '34%',
//     width: '95%',
//     borderRadius: 50,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     paddingHorizontal: '5%',
//     lineHeight: 15,
//   },
//   matchingDesc: {
//     color: 'white',
//     fontSize: 10,
//     fontFamily: 'Inter-Medium',
//     lineHeight: 15,
//   },
//   nameView: {
//     width: '50%',
//     alignItems: 'center',
//   },
//   iconImg: {
//     height: windowHeight * 0.055,
//     width: windowHeight * 0.055,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
