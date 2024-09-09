import styled from "styled-components";
import { ListModule } from "../components/listModule";
import { useEffect, useState } from "react";
import { getHotSearch, SearchResult } from "@/api/modules/user";
import { Message } from "@/components/message";

export const HotSearch = () => {
  const [data, setData] = useState<{ data: SearchResult[]; title: string }[]>(
    []
  );
  const getHotSearchList = async () => {
    try {
      const items = [
        { search: "weibo", title: "微博" },
        { search: "zhihu", title: "知乎" },
        { search: "tieba", title: "贴吧" },
        { search: "toutiao", title: "头条" },
        { search: "tengxun", title: "腾讯" },
        { search: "baidu", title: "百度" },
        { search: "douyin", title: "抖音" },
        { search: "bilibili", title: "哔哩哔哩" },
      ];
      for (const item of items) {
        const res = await getHotSearch(item.search);
        setData((origin) => [...origin, { title: item.title, data: res.data }]);
      }
    } catch (error) {
      Message.error("获取失败");
    } finally {
    }
  };
  useEffect(() => {
    getHotSearchList();
  }, []);
  return (
    <Container>
      {data?.map((item) => (
        <ListModule key={item.title} title={item.title} listData={item.data} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;
