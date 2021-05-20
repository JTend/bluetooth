import { StyleSheet, Dimensions } from 'react-native';

const color = {
  white : "white",
  dark : "#2a2a2a",

}

export const Flex = StyleSheet.create({
  column : { display : "flex", flexDirection : "column" },
  row : { display : "flex", flexDirection : "row" },
  shadow : {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, shadowRadius: 3, elevation : 5
  },
  watermark : {
    position : 'absolute',
    left : 0, bottom : 0,
    zIndex : -1,
    height : Dimensions.get('screen').height,
    width : Dimensions.get('window').width
  },
});

