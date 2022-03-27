import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
    },

    productImage: {
        width: 300,
        height: 450,
        alignSelf: "center",
        resizeMode: 'center',
    },

    bottomContainer: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        flex: 1,
        width: '100%',
    },

    productName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
        marginVertical: 15
    },

    productDescription: {
        fontSize: 18,
        color: "white",
        alignSelf: "center",
        //marginVertical: 10
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        alignSelf: "flex-end",
    }


});