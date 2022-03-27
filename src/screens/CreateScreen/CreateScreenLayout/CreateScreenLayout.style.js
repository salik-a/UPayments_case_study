import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingHorizontal: 20,
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
    createButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        width: 150,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center',

    },
    createButtonText: {
        fontSize: 20,
        color: 'white',
    }
});