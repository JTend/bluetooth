import { StyleSheet, Dimensions } from 'react-native';

const color = {
  white : "white",
  dark : "#2a2a2a",
  cyan : "cyan",
}

export const Flex = StyleSheet.create({
  column : { display : "flex", flexDirection : "column" },
  row : { display : "flex", flexDirection : "row", alignItems : "center" },
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
  center : { justifyContent : "center" },
  between : { justifyContent : "space-between" },
  start : { justifyContent : "flex-start" }
});

export const Size = StyleSheet.create({
  fullScreen : { 
    width : Dimensions.get("screen").width, flex : 1,
    top : 0, left : 0
  }
});

export const Background = StyleSheet.create({
  cyan : { backgroundColor : color.cyan },
  dark : { backgroundColor : color.dark },
  white : { backgroundColor : color.white },
});

export const Text = StyleSheet.create({
  cyan : { color : color.cyan },
  dark : { color : color.dark },
  white :{ color : color.white },
});

export const Icon = StyleSheet.create({
  right : { padding : 10 }
});

const card = StyleSheet.create({
  style : { margin : 15, marginBottom : 0 }
});

const round = StyleSheet.create({
  style : { borderRadius : 5, borderWidth : 1, borderColor : "transparent" }
});

export const Frames = {
  Card : [ Flex.column, Flex.shadow, card.style, round.style, Background.white ],
  Main : [ Flex.column, Background.white, Size.fullScreen, Flex.start ]
};
