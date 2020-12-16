import { Dimensions } from 'react-native';
import {
    titleItemMenuColor,
    userContainerBackgroundColor,
    userContainerBorderColor,
    userNameColor
} from './configsStyle';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default {
    itemMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginVertical: 15
    },
    iconItemMenu: {
        flex: 1.5,
        justifyContent: 'center'
    },
    titleItemMenu: {
        flex: 8.5,
        justifyContent: 'center'
    },
    titleTextItemMenu: {
        color: titleItemMenuColor,
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 10,
    },
    menuContainer: {
        flex: 1
    },
    userContainer: {
        borderBottomWidth: 0.5,
        backgroundColor: userContainerBackgroundColor,
        borderBottomColor: userContainerBorderColor
    },
    imageUserContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    imageUser: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    nameUserContainer: {
        marginVertical: 10
    },
    userName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: userNameColor
    },
    

}