import { colors } from '@util/Colors';

export const commonHeaderNavigationOptions = ({ navigation }) => ({

    headerBackTitle: null,  
    headerStyle: {
      backgroundColor: colors.blueyGray,
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      elevation: 0,
      //
    },
    headerTitleStyle: {
      flex: 1,
      color: 'white',
      textAlign: 'center',   //
    },
    headerTintColor: 'red',
  
  })