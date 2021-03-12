const React = require('react-native');

import {Dimensions} from 'react-native';

const {StyleSheet} = React;

export default {
  container: {
    flex: 1,
  },
  parkingLotImgWrapper: {
    flex: 2,
    borderColor: 'black',
    backgroundColor: '#F9FBFC',
  },
  parkingLotDetailWrapper: {
    flex: 8,
    borderColor: 'black',
    backgroundColor: '#BDF9F8',
    alignItems: 'center',
    
  },
  parkingLotNameWrapper: {
    position: 'absolute',
    height: 60,
    width: '100%',
    borderColor: 'black',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    top: '16%',
    flex: 1,
    flexDirection: 'row',
  },
  parkingLotIcon: {
    flex: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSize: {
    width: 60,
    height: 60,
    backgroundColor: '#E4E721',
    borderColor: 'black',
    borderRadius: 35,
  },
  parkingLotName: {
    flex: 8,
    justifyContent: 'center',
  },
  parkingLotNameTxt: {
    fontSize: 25,
    fontFamily: 'serif',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
  },
  singleDetailWrapper: {
    width: '80%',
    top: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  detailIcon: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  detailTittle:{
    fontSize: 18,
    fontFamily: 'serif',
    marginLeft: 10,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  singleDetailContentWrapper:{
    width: '80%',
    top: '10%',
  },
  singleDetailContentTxt:{
    fontSize: 15,
    fontFamily: 'serif',
    marginLeft: 10,
    marginLeft: 25,
    // borderBottomColor: 'black',
    // borderBottomWidth: 0.5,
  },
  bookingBtn:{
      position: 'absolute',
      height: 60,
      width: '50%',
      backgroundColor: '#E4E721',
      borderRadius: 35,
      top: '80%'
  }
};
