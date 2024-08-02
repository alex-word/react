import { Suspense, useEffect } from "react";
import { useRoutes, RouteObject, useNavigate, Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";

import RouteTable, { SyncRoute } from "./setting";
import { useUserSelector } from "@/redux/userSlice";

//懒加载处理
const syncRouter = (routes: Array<SyncRoute>): RouteObject[] => {
    const transformedRoutes: RouteObject[] = [];
    const { pathname } = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
        if (pathname === '/' || !localStorage.getItem('token')) navigate('/login')
        else if(localStorage.getItem('token')) navigate('/list')
    }, [pathname])
    for (const route of routes as SyncRoute[]) {
        // 假设我们只是简单地将path属性映射到新的对象中
        transformedRoutes.push({
            path: route.path,
            children: route.children && syncRouter(route.children),
            element: (
                route.redirect ? <Navigate to={route.redirect} /> :
                    route.component &&
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
    const { token } = useUserSelector()
    if (props?.route?.meta?.title) {
        document.title = props.route.meta.title;
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // 看是否登录
            navigate('/login');
        }
    }, [token])
    if (props?.route?.meta?.auth) {
        // 看是否登录
        useEffect(() => {
            navigate('/404');
        }, [])
    }


    return props.children;
};

export default () => useRoutes(syncRouter(RouteTable)); 
