import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from '../styles/ParkingLotDetailStyles';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {Overlay} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
const axios = require('axios');
class ParkingLotDetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tableHead: ['Area', 'Empty', 'Booked'],
    tableData: [
      ['A1', 1, 3],
      ['A2', 1, 3],
    ],
    showBooking: 'false',
    areaList: this.props.route.params.area,
    userID: this.props.route.params.userID,
    parkingLotID: this.props.route.params._id,
  };

  componentDidMount() {
    // this.createAreaList();
  }
  updateAreaDB() {
    var data = this.props.route.params.area;
    var test = [];
    this.setState({tableData: []});
    // console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      // var curRow = {[data[i].name, data[i].freeslot, data[i].fullslot]};
      // console.log(curRow);
      // this.setState({tableData:[
      //   ...this.state.tableData,
      //   curRow,
      // ]});
      this.state.tableData.push(curRow);
    }
    console.log(this.state.tableData);
  }
  toggleShowParkingSLot() {
    console.log(this.state.showBooking);
    this.setState({showBooking: !this.state.showBooking});
  }
  addItemToList(item) {
    this.state.areaList.push(item);
    // console.log(this.state.areaList);
  }
  createAreaList() {
    this.setState({areaList: []});
    // console.log(this.state.areaList);
    var data = this.props.route.params.area;
    for (var i = 0; i < data.length; i++) {
      if (data[i].freeslot != '0')
        var curItem = {
          areaName: data[i].name.toString(),
          emptySlot: data[i].freeslot,
          price: data[i].price,
        };

      this.addItemToList(curItem);
      // console.log(curItem);
    }
    // console.log(this.state.areaList);
  }
  handleBookingPress() {
    this.toggleShowParkingSLot();
    // this.createAreaList();
  }

  booking(area){
    // console.log(this.state.userID);
    // console.log(this.state.parkingLotID);
    // console.log(area);
    axios.post('http://gogito.duckdns.org:3002/bookings', {
      
        userID: this.state.userID,
        parkinglotID: this.state.parkingLotID,
        areaName: area
    }
    ).then(
      (response) => {
        console.log(JSON.stringify(response.data));
      },
      (error) => {
        console.log(error.response);
      },
    );

  }
  renderItem = ({item}) => (
    <TouchableOpacity style={styles.parkingLotItemWrapper}
      onPress ={()=>this.booking(item.name)}>
      <View style={styles.parkingLotItemNameWrapper}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </View>
      <View style={styles.parkingLotItemStatusWrapper}>
        <Text>{item.freeslot}</Text>
      </View>
      <View style={styles.parkingLotItemIconWrapper}>
        <Text>{item.price + 'VND'}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parkingLotImgWrapper}>
          <Image
            style={styles.backgroundImg}
            source={{
              uri:
                'https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1506521781263-d8422e82f27a.jpg',
            }}></Image>
        </View>
        {/* Detail */}
        <View style={styles.parkingLotDetailWrapper}>
          <View style={styles.singleDetailWrapper}>
            <Image
              style={styles.detailIcon}
              source={require('../../assets/addressIcon.png')}></Image>
            <Text style={styles.detailTittle}>Address</Text>
          </View>
          <View style={styles.singleDetailContentWrapper}>
            <Text style={styles.singleDetailContentTxt}>
              {this.props.route.params.address}
            </Text>
          </View>
          {/* NEW ITEM */}
          <View style={styles.singleDetailWrapper}>
            <Image
              style={styles.detailIcon}
              source={require('../../assets/parkingSize.png')}></Image>
            <Text style={styles.detailTittle}>Status</Text>
          </View>
          <View style={styles.singleDetailContentWrapper}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={this.state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={this.state.tableData} textStyle={styles.text} />
            </Table>
            {/* OVERLAY BOOKING */}
            <Overlay
              fullScreen="true"
              windowBackgroundColor="#EF2440"
              overlayBackgroundColor="red"
              overlayStyle={styles.showParkingDetailOverlay}
              isVisible={this.state.showBooking}
              onBackdropPress={() => this.toggleShowParkingSLot()}>
              <Text style={styles.titleList}> BOOKING</Text>
              <View style={styles.header}>
                <View style={styles.headerName}>
                  <Text style={styles.headerTxt}>Area</Text>
                </View>

                <View style={styles.headerSlot}>
                  <Text style={styles.headerTxt}>Free Slot</Text>
                </View>
                <View style={styles.headerPrice}>
                  <Text style={styles.headerTxt}>Price</Text>
                </View>
              </View>
              <FlatList
                data={this.state.areaList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.name}
                extraData={this.state}
              />
            </Overlay>
          </View>
          {/* /////FLOAT COMPONENT */}
          <TouchableOpacity
            style={styles.bookingBtn}
            onPress={() => this.handleBookingPress()}>
            <Text style={styles.bookTxt}> BOOK </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.parkingLotNameWrapper}>
          <View style={styles.parkingLotIcon}>
            <Image
              style={styles.iconSize}
              source={require('../../assets/fullSlots.png')}></Image>
          </View>
          <View style={styles.parkingLotName}>
            <Text style={styles.parkingLotNameTxt}>
              {this.props.route.params.name}
            </Text>
          </View>
        </View>
        {/* /////////////////////////////////////////// */}
      </View>
    );
  }
}

export default ParkingLotDetailComponent;
