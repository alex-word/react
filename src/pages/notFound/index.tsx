import NotFound from "@/assets/images/404.jpg";
const notFound = () => {
    return <div className="flex items-center content-center" style={{height:'100%'}}><img width={1000} src={NotFound} alt="" /></ div>
}
export default notFound