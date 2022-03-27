import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    emptyListText: {
        fontSize: 18,
        marginTop: 40
    },
    indicator: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    listStyle: {
        marginTop: 15,
        flex: 1,
        height: Dimensions.get('window').height,

    },
    emptyListContainer: {
        flex: 1,
    }
});