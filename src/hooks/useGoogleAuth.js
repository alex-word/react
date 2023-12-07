import { loading,dismissLoading } from "../utils/loading";


export const useGoogleAuthInitialize = () => {
  return (response) => {
    const google = window.google;
    if(!google){
      return console.log("Google is empty")
        
    }
    const clientId = window._$GOOGLE_CLIENTID;
    try {
      //loading();
      google.accounts.id.initialize({
        login_uri:'https://www.hashdragon.io/login',
        client_id: clientId,
        callback: response,
        cancel_on_tap_outside: true,
        itp_support:true,
        ux_mode: "redirect",
        intermediate_iframe_close_callback:(newItem)=>{
          console.log(newItem);
          return false;
        },
        
        native_callback:(e)=>{
        //  dismissLoading();
          console.log(e);
         // google.accounts.id.cancel()
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
