import { showMessage } from 'react-native-flash-message';


export const topWarningShowMessage = (title, type) => {
    return showMessage({
        message: title,
        type: type,
        style: {},
        titleStyle: { fontSize: 18, alignSelf: "center", marginTop: 10 },
        //icon: { icon: "success", position: "right" },
    })
}




