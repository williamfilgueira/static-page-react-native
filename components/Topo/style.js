import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    box:{
      backgroundColor:'green',

      paddingVertical:20,
      paddingHorizontal: 10,

      borderBottomEndRadius:40,
      borderBottomStartRadius:40,

      borderBottomEndRadius: 5,
      borderBottomStartRadius:5,

      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
    },
    boxIcone: {
        width: 60,
        height: 60,
  
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 1,
  
        marginRight: 15
      },
  
      boxTitulo: {
        color: '#fff',
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
      },
      boxSubtitulo: {
        color: '#fff',
      },
});

export default estilo;