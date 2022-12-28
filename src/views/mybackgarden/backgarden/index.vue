<template>
  <div>
    <Card :bordered="false">
      <div class="gutter-example">
        <Row :gutter="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
          <Col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="6"
            class="gutter-row"
            v-for="(item, k) in linkCards"
            :key="k"
          >
            <CardGrid @click="handleLinkCard(item)">
              <div class="item-cts">
                <div><i :class="`iconfont ${item.icon}`"></i></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </CardGrid>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script type="ts">
import { reactive, toRefs } from "vue"
import  { useRouter } from "vue-router"
import { Card, Row, Col } from "ant-design-vue"
const CardGrid = Card.Grid

export default {
  components: {
    Card,
    CardGrid,
    Row,
    Col
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      linkCards: [
        {
          icon: 'icon-luyou',
          text: 'history路由',
          path: 'http://jjf577757.xyz/history-router.html',
          type: '_blank'
        },
        {
          icon: 'icon-luyou',
          text: 'hash路由',
          path: 'http://jjf577757.xyz/hash-router.html',
          type: '_blank'
        },
        {
          icon: 'icon-luyou',
          text: '深拷贝&浅拷贝以及解决方案（JS）',
          path: 'https://www.jianshu.com/p/437a52e4a9c6',
          type: '_blank'
        },{
          icon: 'icon-luyou',
          text: 'vue富文本编辑器(v-md-editor)',
          path: '/codehighlight',
        },
        {
          icon: 'icon-luyou',
          text: '模拟弹幕',
          path: '/barrage',
        },{
          icon: 'icon-luyou',
          text: 'TypeScript',
          path: '/study-typescript',
        },{
          icon: 'icon-luyou',
          text: '数据大屏',
          path: '/data-bigscreen',
        },
        {
          icon: 'icon-luyou',
          text: '图片放大镜',
          path: '/image-magnifier',
        },
        {
          icon: 'icon-luyou',
          text: '分页器(vue/ant-design-vue)',
          path: '/pagination-vue',
        },
      ]
    })
    const handleLinkCard = (record) => {
      if(record.type && record.type === '_blank') {
        let ele_a = document.createElement("a")
        ele_a.href = record.path
        ele_a.target = "_blank"
        document.body.appendChild(ele_a)
        ele_a.click()
        document.body.removeChild(ele_a)
      } else {
        router.push(record.path)
      }
    }
    const routerChange = () => {
      location.replace("/home")
    }

    return {
      ...toRefs(state),
      handleLinkCard,
      routerChange
    }
  }
}
</script>

<style scoped lang="less">
.item-cts {
  .iconfont {
    font-size: 20px;
  }
  .text {
    color: #666;
  }
}
/deep/.ant-card-body {
  display: flex;
  flex-wrap: wrap;
  .ant-card-grid {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .gutter-example {
    width: 100%;
  }
}
</style>
