//拼接i18n   比如login.sign up
//每个t函数都需要login.去拼接很麻烦
const useI18nWithHead = (t, head) => {
    return text => {
        return t(`${head}.${text}`);
    };
};
export default useI18nWithHead;
