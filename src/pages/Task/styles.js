import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20,
    },
    Tasks: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    deleteTask: {
        justifyContent:'center',
        paddingLeft: 15,
    },

    DescriptionTask: {
        width: "75%",
        alignContent:'flex-start',
        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5",
    },

    buttonNewTask: {
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: "#f92e6a",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    },

    iconButton: {
        color: "#FFFFFF",
        fontSize: 22,
        
    },
    buttonLogout: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 5,
    left: 340,
    
 
    
    }
})

export default styles