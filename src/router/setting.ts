import React, { lazy } from "react";
// 声明类型
export interface SyncRoute {
  path: string;
  component: React.LazyExoticComponent<any>;
  children?: Array<SyncRoute>;
  redirect?: string;
  meta?: {
    title?: string;
    auth?: boolean;
  };
}

const RouteTable: Array<SyncRoute> = [
  {
    path: "/user-list",//一级路由
    component: lazy(() => import("@/pages/user/list")),
    meta: {
      title: "用户列表",
      auth: false,
    },
    // children: [//二级路由
    //   {
    //     path: "",//为空则默认显示该路由
    //     component: lazy(() => import("@/pages/home/index/index")),
    //   },
    //   {
    //     path: "index",
    //     component: lazy(() => import("@/pages/home/index/index")),
    //     meta: {
    //       title: "首页",
    //     },
    //   }
    // ],
  },
  {
    path: "/login",
    component: lazy(() => import("@/pages/login")),
    meta: {
      title: "登录",
      auth: false,
    },
  },
  {
    path: "/404",//404页面
    component: lazy(() => import("@/pages/notFound")),
  },
  {
    path: "*",
    redirect: '/login',
    component: lazy(() => import("@/pages/login")),
  }
];

export default RouteTable;
