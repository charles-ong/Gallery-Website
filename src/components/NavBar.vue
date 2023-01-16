<template>
    <div class="nav">
        <RouterView/>
        <a-menu
          id="navbar"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          style="width: 100vw; height: 7vh; justify-content: center;"
          mode="horizontal"
          @click="handleClick"
        >
          <a-menu-item key="a1" title="Home">
            <template #icon>
                <HomeOutlined />
            </template>
            <RouterLink to="/">Home</RouterLink>
          </a-menu-item>
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <template #icon>
                <CameraOutlined />
            </template>
            <template #title><RouterLink to="/Photos">Camera</RouterLink></template>
            <a-menu-item-group key="g1" title="2023">
                <a-sub-menu key="subsub1" title="Malaysia">
                    <a-menu-item key="1"><RouterLink to="/Photos#Sitiawan23">Sitiawan</RouterLink></a-menu-item>
                </a-sub-menu>
            </a-menu-item-group>
            <a-menu-item-group key="g2">
                <template #title>2022</template>
                <a-sub-menu key="subsub2" title="Australia">
                    <a-menu-item key="2"><RouterLink to="/Photos#Melbourne22">Melbourne</RouterLink></a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="subsub3" title="South Korea">
                    <a-menu-item key="3"><RouterLink to="/Photos#Seoul22">Seoul</RouterLink></a-menu-item>
                    <a-menu-item key="4"><RouterLink to="/Photos#Busan22">Busan</RouterLink></a-menu-item>
                </a-sub-menu>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="a2" @titleClick="titleClick">
            <template #icon>
              <InstagramOutlined />
            </template>
            <RouterLink to="/Instagram">Instagram</RouterLink>
          </a-menu-item>
          <a-menu-item key="a3">
            <template #icon>
              <ShoppingOutlined />
            </template>
            <RouterLink to="/Shop">Shop</RouterLink>
          </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue';
  import { HomeOutlined, CameraOutlined, InstagramOutlined, ShoppingOutlined} from '@ant-design/icons-vue';
  export default defineComponent({
    components: {
        HomeOutlined,
        CameraOutlined,
        InstagramOutlined,
        ShoppingOutlined,
    },
    setup() {
      const selectedKeys = ref(['a1']);
      const openKeys = ref(['a1']);
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

<!-- <style>
    .nav {
        position: fixed;
        top: 0;
        left: 0;
    }
</style> -->