import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#1f1e25',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    name:{
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    button:{
        backgroundColor: 'red',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 28,
        color: '#fff',
    }
})