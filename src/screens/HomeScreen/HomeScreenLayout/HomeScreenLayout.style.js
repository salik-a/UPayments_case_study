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
    indicatorCategories: {
        alignItems: "center",
        justifyContent: "center",
    },

    listStyle: {
        marginTop: 15,
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',

    },
    emptyListContainer: {
        flex: 1,
    },
    categoriesCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        backgroundColor: "white",
        borderRadius: 20,
        margin: 4,
        padding: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    categoriesCardSelected: {
        borderColor: "black",
        backgroundColor: "black",
    },
    categoriesCardSelectedText: {
        color: "white",
    },
    categoriesCardText: {
        color: "black",
    },
    categoriesCardContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 10,
        alignSelf: "center"
    }
});