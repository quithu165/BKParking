// import React, {Component, PermissionsAndroid} from 'react';
// import WebView from 'react-native-webview';
// import styles from '../styles/MapStyles';
// import map from '../common/map';
// import {Text, View, TouchableOpacity} from 'react-native';

// class MapTesting extends Component {
//   // componentDidMount(){
//   //     PermissionsAndroid.request(
//   //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   //         {
//   //           title: 'Location Access Permission',
//   //           message: 'We would like to use your location',
//   //           buttonPositive: 'Okay'
//   //         }
//   //       );
//   // }
//   render() {
//     return (
//       <View style={styles.container}>
//         <WebView
//           ref={'Map_Ref'}
//           source={{html: map}}
//           geolocationEnabled={true}
//         />
//         <View style={styles.overlay}>
          
//         </View>
//       </View>
//     );
//   }
// }

// export default MapTesting;
import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MapTesting = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MapTesting;