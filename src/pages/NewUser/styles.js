import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        color: "#F92E6A",
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        height: 50,
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f92e6a",
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#4d5156',

    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f92e6a",
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
        color: "#4D5156",
        
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