import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,} from 'react-native';
import styles from '../styles/ParkingLotDetailStyles';
class ParkingLotDetailComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parkingLotImgWrapper}>
        <Image
              style={styles.backgroundImg}
              source={{uri:'https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1506521781263-d8422e82f27a.jpg'}}></Image>
        </View>
        {/* Detail */}
        <View style={styles.parkingLotDetailWrapper}>
          <View style={styles.singleDetailWrapper}>
          <Image
              style={styles.detailIcon}
              source={require('../../assets/addressIcon.png')}></Image>
              <Text style={styles.detailTittle}>
                  Address
              </Text>
          </View>
          <View style={styles.singleDetailContentWrapper}>
          <Text style={styles.singleDetailContentTxt}>
                  Ky Hoa Street, Tan Binh, HCM CiTy
              </Text>
          </View>
          {/* NEW ITEM */}
          <View style={styles.singleDetailWrapper}>
          <Image
              style={styles.detailIcon}
              source={require('../../assets/parkingSize.png')}></Image>
         <Text style={styles.detailTittle}>
                  Infracstructure
              </Text>
          </View>
          <View style={styles.singleDetailContentWrapper}>
          <Text style={styles.singleDetailContentTxt}>
                  150 Slots
              </Text>
          </View>
          {/* NEW ITEM */}
          <View style={styles.singleDetailWrapper}>
          <Image
              style={styles.detailIcon}
              source={require('../../assets/status.png')}></Image>
         <Text style={styles.detailTittle}>
                  Status
              </Text>
          </View>
          <View style={styles.singleDetailContentWrapper}>
          <Text style={styles.singleDetailContentTxt}>
                  Full
              </Text>
          </View>
          <TouchableOpacity style={styles.bookingBtn}></TouchableOpacity>
        </View>
        <View style={styles.parkingLotNameWrapper}>
          <View style={styles.parkingLotIcon}>
          <Image
              style={styles.iconSize}
              source={require('../../assets/fullSlots.png')}></Image>
          </View>
          <View style={styles.parkingLotName}>
              <Text style={styles.parkingLotNameTxt}>
                  Ky Hoa Parking Lot
              </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ParkingLotDetailComponent;