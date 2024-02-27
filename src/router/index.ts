import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/mybackgarden/Home.vue";
import Root from "../views/mybackgarden/Root.vue";
import EntertainmentMedia from "@/views/entertainmentmedia/index.vue";
import EntertainmentMediaNormalmode from "@/views/entertainmentmedia/normalMode/index.vue";
import EntertainmentMediaCombinationmode from "@/views/entertainmentmedia/combinationMode/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/entertainment-media",
    redirect: "/root",
  },
  {
    path: "/root",
    component: Root,
    children: [
      {
        path: "/home",
        component: Home,
        meta: {
          title: "主页",
        },
      },
      {
        path: "/backgarden",
        component: () => import("@/views/mybackgarden/backgarden/index.vue"),
        meta: {
          title: "后花园",
        },
      },
      {
        path: "/codehighlight",
        component: () => import("@/views/mybackgarden/backgarden/codehighlight/index.vue"),
        meta: {
          title: "vue富文本编辑器",
        },
      },
      {
        path: "/barrage",
        component: () => import("@/views/mybackgarden/backgarden/barrage/index.vue"),
        meta: {
          title: "模拟弹幕",
        },
      },
      {
        path: "/study-typescript",
        component: () => import("@/views/mybackgarden/backgarden/study-typescript/index.vue"),
        meta: {
          title: "TypeScript",
        },
      },
      {
        path: "/image-magnifier",
        component: () => import("@/views/mybackgarden/backgarden/imagemagnifier/index.vue"),
        meta: {
          title: "图片放大镜",
        },
      },
      {
        path: "/pagination-vue",
        component: () => import("@/views/mybackgarden/backgarden/pagationvue/index.vue"),
        meta: {
          title: "分页器(vue/ant-design-vue)",
        },
      },
      {
        path: "/xswitch",
        component: () => import("@/views/mybackgarden/backgarden/xswitch/index.vue"),
        meta: {
          title: "XSwitch",
        },
      },
      {
        path: "/interview-question",
        component: () => import("@/views/mybackgarden/backgarden/interviewquestions/index.vue"),
        meta: {
          title: "面试题（2023）",
        },
      },
      {
        path: "",
        redirect: "/home",
      },
    ],
  },
  {
    path: "/data-bigscreen",
    component: () => import("@/views/mybackgarden/backgarden/datascreen/index.vue"),
    meta: {
      title: "数据大屏",
    },
  },
  {
    path: "/entertainment-media",
    component: EntertainmentMedia,
    children: [
      {
        path: "",
        component: EntertainmentMediaNormalmode,
      },
      {
        path: "normal-mode",
        component: EntertainmentMediaNormalmode,
      },
      {
        path: "combination-mode",
        component: EntertainmentMediaCombinationmode,
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/notfontpage/index.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
