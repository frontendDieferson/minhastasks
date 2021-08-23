import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor: '#34495E',


    },
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: '#ECF0F1'
    },
    inputText: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#ECF0F1',
    },
    buttonNewTask: {
        position: "absolute",
        width: '90%',
        height: 60,
        bottom: 30,
        left: 20,
        
        backgroundColor: "#1ABC9C",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    iconButton: {
        color: "#FFFFFF",
        fontSize: 16,
    },
})

export default styles