import { StyleSheet, Platform } from "react-native";

const isIos = Platform.OS == "ios";
export default StyleSheet.create({
    container: {


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: isIos ? 1 : 2.5,

        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 4,

        flex: 1
    },
    imageContainer: {
        flex: 1
    },
    productImage: {
        width: 150,
        height: 250,
        alignSelf: "center",
        resizeMode: 'center',
    },
    bottomContainer: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        width: '100%',
        minHeight: 100,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",

    },
    icon: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",

    }








})