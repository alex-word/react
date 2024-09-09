/**
 * ListModule组件显示热门搜索项列表。
 * 
 * @param title 列表模块的标题。
 * @param listData 要显示的热门搜索项数组。
 * @param other 传递给组件的其他属性。
 */
import React from "react";
import { Card, CardProps } from "antd";
import styled from "styled-components";
import { SearchResult } from "@/api/modules/user";
import { formatNumberZhCh } from "@/utils/formatNumber";
import Icon from "@/components/icon";
import { HotSearchType } from "../config";
interface ItemsProps extends CardProps {
  title: string;
  listData: SearchResult[];
}

export const ListModule: React.FC<ItemsProps> = ({
  title,
  listData,
  ...other
}) => {
  return (
    <HeaderCard
      bodyStyle={{ padding: 16, paddingRight: 0 }}
      title={
        <div>
          <Icon
            type={"icon-" + HotSearchType[title]}
            style={{ marginRight: 8 }}
          />
          <span>{title}热搜</span>
        </div>
      }
      {...other}
    >
      <div className="list-box">
        {listData.map((item, index) => (
          <div
            key={item?.hot_search_id}
            className={`flex items-center cell-wrapper ${index < 3 ? "top-ranking-" + (index + 1) : ""
              }`}
            onClick={() => {
              window.open(item.hot_search_href, "_blank", "noreferrer");
            }}
          >
            <span className="cell-order">{index + 1}</span>
            <span className="cell-title">{item?.hot_search_title}</span>
            <span className="cell-heat">
              {formatNumberZhCh(item?.hot_metrics)}
            </span>
          </div>
        ))}
      </div>
    </HeaderCard>
  );
};
const HeaderCard = styled(Card)`
  flex: 1;
  height: 450px;
  .list-box {
    margin-bottom: 8px;
    height: 360px;
    overflow-y: auto;
    color: #666;
    .cell-wrapper {
      padding: 8px;
      border-bottom: 1px solid #e3e3e3;
      gap: 8px;
    }
    .cell-order {
      width: 20px;
      font-weight: 600;
    }
    .top-ranking-1 .cell-order {
      color: #fe2d46;
    }
    .top-ranking-2 .cell-order {
      color: #f60;
    }
    .top-ranking-3 .cell-order {
      color: #faa90e;
    }
    .cell-title {
      white-space: normal;
      flex: 1;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
    .cell-heat {
      width: 60px;
      font-size: 12px;
      text-align: right;
    }
  }
`;
