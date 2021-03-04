import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  BackHandler,
  ToastAndroid,
  Image,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import WebView from 'react-native-webview';
import map from '../common/map';
import styles from '../styles/HomeStyles';
import ModalDropdown from 'react-native-modal-dropdown';
class HomeComponent extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  }
  handleDropdownSelect(userOption) {
    switch (userOption) {
      case 0:
        this.props.navigation.navigate('userprofile', this.props.route.params);
        break;

      case 1:
        console.log(this.props.route.params);
        this.props.navigation.navigate('addplate', this.props.route.params._id);
        break;

      case 2:
        Alert.alert(
          'Logout',
          'Do you want to logout?',
          [
            {
              text: 'No',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => this.props.navigation.navigate('login'),
            },
          ],
          {cancelable: false},
        );

        break;
      case 3:
        this.props.navigation.navigate('map');
        break;
      default:
        console.log(userOption);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={'Map_Ref'}
          source={{html: map}}
          geolocationEnabled={true}
        />
        <View style={styles.overlay}>
          <View style={styles.body}>
            <View style={styles.header}>
              <View style={styles.userOptions}>
                <ModalDropdown
                  style={styles.dropdownIcon}
                  dropdownStyle={styles.dropdownList}
                  // renderSeparator={() => <View /> }
                  onSelect={(userOption) =>
                    this.handleDropdownSelect(userOption)
                  }
                  options={[
                    'User Infomation',
                    'Add license plate',
                    'Quit',
                    'Map Testing',
                  ]}
                  renderRightComponent={() => (
                    <Image
                      style={styles.usericon}
                      source={require('../../assets/nav-menu.png')}></Image>
                  )}></ModalDropdown>
              </View>
              <View style={styles.searchBox}>
                <View style={styles.searchArea}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#0D0D0F"
                    // onChangeText={this.handleLName}
                  />
                  <TouchableOpacity
                    style={styles.searchIconArea}
                    //   onPress={() => {

                    //   }}
                  >
                    <Image
                      style={styles.searchIcon}
                      source={require('../../assets/search-icon.png')}></Image>
                  </TouchableOpacity>

                  <View style={styles.searchTemp}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeComponent;
