import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34495E",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,

    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    input: {
        width: 300,
        height: 50,
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#2C3E50",
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#ECF0F1',

    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1ABC9C",
        borderRadius: 50,
        marginTop: 30,
        
    },
    textButtonLogin: {
        color: "#FFF",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        marginTop: 20,
        color: "#ECF0F1",
        
    },
    linkSubscribe: {
        color: "#1877f2",
        fontSize: 16,
    },
    footer: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    logoFooter: {
        width: 18,
        height: 22,
    },
    Icon: {
        color: '#ECF0F1',
        position: "absolute",
        left: 320,
        
    },


})

export default styles