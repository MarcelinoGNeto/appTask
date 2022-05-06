import { StyleSheet } from "react-native";
import { Platform } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios"? 0 : 50,
  },
  title: {
    fontSize: 48,
    color: '#F92E6A',
    marginBottom: 10,
    fontWeight: "bold"
  },
  input:{
    width:"90%",
    marginTop:10,
    padding:10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor:"#F92E6A",
    marginLeft:"auto",
    marginRight:"auto",
    color: "#4d5156"
   },
   buttonRegister:{
    width:200,
    height:50,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"#F92E6A",
    borderRadius:50,
    marginTop: 30,
   },
   textButtonRegister:{
    color: "#ffffff", 
    fontWeight: "bold"
   },
   contentAlert:{
     marginTop: 20,
     flexDirection: 'row',
     justifyContent: "center",
     alignItems: "center"
   },
   warningAlert:{
     paddingLeft:10,
     color: "#4d5156",
     fontSize:16,
   },
   registration:{
     marginTop:20,
     color: '#4d5156'
   },
   linkSubscribe:{
     marginTop:20,
     color: '#1877f2'
   },
   iconButton:{
    color:"#ffffff",
    fontSize:16,
    fontWeight:"bold",
   }
});

export default styles;
