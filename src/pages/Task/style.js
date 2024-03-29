import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20

    },
    Tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 15
    },
    DescriptionTask:{
        width: "80%",
        alignItems: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5"
    },
    buttonNewTask: {
        width:60,
        height:60,
        position: "absolute",
        bottom: 30,
        left:20,
        backgroundColor:"#f92e6a",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:50
    },
    buttonLogout: {
        width:60,
        height:60,
        position: "absolute",
        bottom: 30,
        right:20,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
    },
    iconButtonLogout:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
    },
    
})

export default styles