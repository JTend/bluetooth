import { StyleSheet, Dimensions } from 'react-native';

const color = {
  light : "whitesmoke",
  white : "white",
  dark : "gray",
  black : "black",
  cyan : "cyan"
}

export const Flex = StyleSheet.create({
  column : { display : "flex", flexDirection : "column" },
  row : { display : "flex", flexDirection : "row", alignItems : "center" },
  shadow : {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, shadowRadius: 3, elevation : 5
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

const text = StyleSheet.create({
  cyan : { color : color.cyan },
  dark : { color : color.dark },
  white : { color : color.white },
  black : { color : color.black },
  title : { fontSize : 24, fontWeight : "bold" },
  normal : { fontSize : 20 },
  row : { flex : 1, marginHorizontal : 5 }
});

const margin = StyleSheet.create({
  zero : { margin : 0 },
  short : { margin : 5 },
  medium : { margin : 10 },
  wide : { margin : 20 }
});

export const Text = {
  Title : [ text.title, text.black, margin.wide ],
  Paragraph: [ text.normal, text.dark ],
  Row : [ text.normal, text.dark, text.row ]
};

export const Icon = StyleSheet.create({
  Row : { padding : 10 }
});

const card = StyleSheet.create({
  style : { margin : 15, marginBottom : 0 }
});

const round = StyleSheet.create({
  style : { borderRadius : 5, borderWidth : 1, borderColor : "transparent" }
});

export const Frames = {
  Card : [ Flex.column, Flex.shadow, card.style, round.style, Background.white ],
  Main : [ Flex.column, Background.white, Size.fullScreen, Flex.start ],
  toCenter : [ Flex.column, Background.white, Size.fullScreen, Flex.center ]
};
