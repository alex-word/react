const useDoRouteOrLink = () => {
  return (route, navigate) => {
    //route:{isLink:Boolean,path:String}    navigate:(path:String)=>void;
    if (route?.isLink) {
      if (route?.open) window.open(route?.path);
      else window.location.href = route?.path;
      return;
    }
    navigate(route?.path);
  };
};

export default useDoRouteOrLink;
