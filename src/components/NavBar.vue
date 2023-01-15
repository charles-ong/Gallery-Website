<template>
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template #icon>
            <CameraOutlined />
        </template>
        <template #title>Camera</template>
        <a-menu-item-group key="g1" title="2023">
            <a-sub-menu key="subsub1" title="Malaysia">
                <a-menu-item key="1">Sitiawan</a-menu-item>
            </a-sub-menu>
        </a-menu-item-group>
        <a-menu-item-group key="g2">
            <template #title>2022</template>
            <a-sub-menu key="subsub2" title="Australia">
                <a-menu-item key="2">Melbourne</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="subsub3" title="South Korea">
                <a-menu-item key="3">Seoul</a-menu-item>
                <a-menu-item key="4">Busan</a-menu-item>
            </a-sub-menu>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #icon>
          <InstagramOutlined />
        </template>
        <template #title>Instagram</template>
        <a-menu-item key="5">Personal</a-menu-item>
        <a-menu-item key="6">SuperSoup</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <ShoppingOutlined />
        </template>
        <template #title>Shop</template>
        <a-menu-item key="7">2023</a-menu-item>
      </a-sub-menu>
    </a-menu>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue';
  import { CameraOutlined, InstagramOutlined, ShoppingOutlined} from '@ant-design/icons-vue';
  export default defineComponent({
    components: {
        CameraOutlined,
        InstagramOutlined,
        ShoppingOutlined,
    },
    setup() {
      const selectedKeys = ref(['1']);
      const openKeys = ref(['sub1']);
      const handleClick = e => {
        console.log('click', e);
      };
      const titleClick = e => {
        console.log('titleClick', e);
      };
      watch(() => openKeys, val => {
        console.log('openKeys', val);
      });
      return {
        selectedKeys,
        openKeys,
        handleClick,
        titleClick,
      };
    },
  });
</script>