import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container : {
      flex:1,
      padding:24,
      backgroundColor:'#000000'
    },
    titulo : {
      color: '#fff',
      fontSize:24,
      fontWeight:'bold',
      marginTop: 20,
      
    },
    data : {
      color: '#fff',
    },
    input : {
        height:56,
        backgroundColor: '#1F1E25',
        color: '#fff',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 16,
        flex: 1
    },
    button : {
        backgroundColor: '#31CF67',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    textButton : {
        fontSize: 28,
        color: '#fff',
    },
    form : {
        flexDirection: 'row',
        marginTop: 24,
    },
    listEmpty: {
      color: '#fff',
      fontSize: 14,
      paddingTop: 20,
      textAlign: "center"
    }
  })

