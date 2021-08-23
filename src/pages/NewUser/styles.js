import { StyleSheet } from "react-native";

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
    title: {
        fontSize: 16,
        color: "#ECF0F1",
        marginBottom: 10,
        fontWeight: 'bold',
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
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1ABC9C",
        borderRadius: 50,
        marginTop: 30,
        
    },
    textButtonRegister: {
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
    login: {
        marginTop: 20,
        color: "#ECF0F1",
        
    },
    linkLogin: {
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
    }
})

export default styles