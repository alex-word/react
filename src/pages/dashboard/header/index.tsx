import { Card } from "antd";
import { Items } from "../components/items"
import { data } from "./config";

export const Header = () => {
    return <div className="flex justify-center gap-16">
        {data?.map((item, index) =>
            <Items  {...item} />
        )}
    </div>
}