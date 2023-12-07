import { Translation, useTranslation } from "react-i18next";
import { toastShow } from "../utils/toast";

const useChangeLanguage=()=>{
    const {i18n}=useTranslation();
    return (lng)=>{
        i18n.changeLanguage(lng);
        console.log("Change Language to "+lng)
    }
}

export default useChangeLanguage;