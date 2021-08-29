import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#34495E",
        paddingTop: 40,
    },
    headerTitle: {
        color:'#ECF0F1',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 10,

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
        width: "80%",
        alignContent:'flex-start',
        backgroundColor: '#1ABC9C',
        padding: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 5,
        marginRight: 15,
        color: "#ECF0F1",
    },
    editTasks: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        left: 35,
        bottom: 15,
    },

    buttonNewTask: {
    
    width: 150,
    height: 50,
    bottom: 30,
    left: 120,
    backgroundColor: "#1ABC9C",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    },

    iconButton: {
        color: "#FFFFFF",
        fontSize: 18,
        
    },
    buttonLogout: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 36,
    left: 340,
    
 
    
    }
})

export default styles