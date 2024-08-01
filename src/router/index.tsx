import { Suspense, useEffect } from "react";
import { useRoutes, RouteObject, useNavigate, Navigate } from "react-router-dom";
import { Spin } from "antd";

import RouteTable, { SyncRoute } from "./setting";

//懒加载处理
const syncRouter = (routes: Array<SyncRoute>): RouteObject[] => {
    const transformedRoutes: RouteObject[] = [];

    for (const route of routes as SyncRoute[]) {
        // 假设我们只是简单地将path属性映射到新的对象中
        transformedRoutes.push({
            path: route.path,
            children: route.children && syncRouter(route.children),
            element: (
                route.redirect ? <Navigate to={route.redirect} /> :
                    <Suspense
                        fallback={
                            <div className="h-full w-full flex justify-center items-center">
                                <Spin tip="Loading" size="large" />
                            </div>
                        }
                    >
                        <RequireAuth route={route}>
                            <route.component />
                        </RequireAuth>
                    </Suspense>),
            // 这里可以添加其他必要的属性
        });
    }

    // 确保在所有执行路径上都有返回值
    return transformedRoutes;
};
//路由拦截
const RequireAuth = (props: { route: SyncRoute; children: any }) => {
    if (props?.route?.meta?.title) {
        document.title = props.route.meta.title;
    }
    const navigate = useNavigate();

    if (props?.route?.meta?.auth && !localStorage.getItem('token')) {
        // 看是否登录
        useEffect(() => {
            navigate('/404');
        })
    }


    return props.children;
};

export default () => useRoutes(syncRouter(RouteTable)); 
