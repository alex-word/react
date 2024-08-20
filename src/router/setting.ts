import React, { lazy } from "react";
// 声明类型
export interface SyncRoute {
  path: string;
  component?: React.LazyExoticComponent<any> | React.ComponentType<any>;
  children?: Array<SyncRoute>;
  redirect?: string;
  meta?: {
    title?: string;
    auth?: boolean;
  };
}

const RouteTable: Array<SyncRoute> = [

  {
    path: "/",//一级路由
    children: [//二级路由
      {
        path: "*",//为空则默认显示该路由
        component: lazy(() => import("@/layout")),
        children: [
          {
            path: 'dashboard',
            component: lazy(() => import("@/pages/dashboard/index")),
            meta: {
              title: "Dashboard",
              auth: false
            },
          },
          {
            path: 'list',
            component: lazy(() => import("@/pages/user/list")),
            meta: {
              title: "用户列表",
              auth: false
            },
          },
          {
            path: "*",
            redirect: '/404',
          }
        ]
      },
      {
        path: "login",
        component: lazy(() => import("@/pages/login")),
        meta: {
          title: "登录",
          auth: false,
        },
      },
      {
        path: "404",//404页面
        component: lazy(() => import("@/pages/notFound")),
      },
    ],
  },
];

export default RouteTable;
