import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { iconItemMenuColor } from '../Styles/colorsStyle';

import homeScreen from '../Screen/homeScreen';
import secondScreen from '../Screen/secondScreen';
import singInScreen from '../Screen/singInScreen';

import styles from '../Styles/drawerStyles';

function DrawerMenu(props) {
    return (
        <TouchableOpacity onPress={props.navigation}>
            <View style={styles.itemMenu}>
                <View style={styles.iconItemMenu}>
                    <FontAwesome size={22} name={props.iconName} color={iconItemMenuColor} />
                </View>
                <View style={styles.titleItemMenu}>
                    <Text style={styles.titleTextItemMenu}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

function Menu(props) {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.userContainer}>
                <View style={styles.imageUserContainer}>
                    <Image style={styles.imageUser} source={require('../../assets/favicon.png')} />
                </View>
                <View style={styles.nameUserContainer}>
                    <Text style={styles.userName}>{'nombreusuario'}</Text>
                </View>
            </View>
            <DrawerMenu iconName='home' titleName='Inicio' navigation={() => props.navigation.navigate('Home')} />
            <DrawerMenu iconName='list-alt' titleName='Segunda' navigation={() => props.navigation.navigate('Second')} />
            <DrawerMenu iconName='sign-in' titleName='SignInScreen' navigation={()=> props.navigation.navigate('SignInScreen')} />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return(
    <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Home" component={homeScreen} />
            <Drawer.Screen name="Second" component={secondScreen} />
            <Drawer.Screen name="SignInScreen" component={singInScreen} />
        </Drawer.Navigator>
    </NavigationContainer>);
}

export default MyDrawer;