import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imc : {
        color: '#8C4FCA',
        fontWeight: 'bold',
        fontSize: 24
    },
    subImc : {
        fontSize: 16,
        color: '#967ADC',
        marginTop: 120
    },
    container2: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    container1 : {
      padding:24,
      backgroundColor:'#967ADC',
    },
    containerInput : {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo : {
        color: 'white',
        textAlign: 'center',
        fontSize: 24
    },
    subtitulo : {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    inputPeso : {
        backgroundColor: 'white',
        width: 120,
        height: 56,
        textAlign: 'center',
        marginTop: 120,
        borderRadius: 20
    },
    inputAltura : {
        backgroundColor: 'white',
        width: 120,
        height: 56,
        textAlign: 'center',
        marginTop: 120,
        marginLeft: 30,
        borderRadius: 20
    },
    button : {
        backgroundColor: 'white',
        marginTop: 100,
        width: 300,
        height: 56,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center'
    },
    textButton : {
        fontSize: 24,
        color: '#967ADC',
        fontWeight: "bold"
    },
    footer : {
        backgroundColor: '#967ADC',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',       
    },
    main : {
        justifyContent: 'space-between',
        flex: 1
    }

  })